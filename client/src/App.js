import React, { useState, useEffect } from "react";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import backgroundImage from "./assets/sunset.jpg";
import axios from "axios";

const App = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [currentLocation, setCurrentLocation] = useState({});
  const [showCurrentLocation, setShowCurrentLocation] = useState(true);

  const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
      });
      setLocation("");
      setShowCurrentLocation(false);
    }
  };

  const fetchUserLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
        )
        .then((response) => {
          setCurrentLocation(response.data);
        });
    });
  };

  useEffect(() => {
    fetchUserLocation();
  }, []);

  return (
    <>
      <GlobalStyles />
      <Container>
        <Main>
          <SearchBar
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="Enter Location"
            onKeyPress={searchLocation}
          />
          <Top>
            <Location>
              {!data.name && showCurrentLocation ? (
                <p>{currentLocation.name}</p>
              ) : (
                <p>{data.name}</p>
              )}
            </Location>
            <Temp>
              {showCurrentLocation ? (
                <h2>{Math.round(currentLocation.main?.temp)}°C</h2>
              ) : (
                <h2>{Math.round(data.main?.temp)}°C</h2>
              )}
            </Temp>
            <Description>
              {showCurrentLocation ? (
                <p>{currentLocation.weather?.[0].main}</p>
              ) : (
                <p>{data.weather?.[0].main}</p>
              )}
            </Description>
          </Top>

          {showCurrentLocation ? (
            <Bottom>
              <FeelsLike>
                <FeelsLikeTemp>
                  <span>Feels Like:</span>
                  {currentLocation.main ? (
                    <p>{Math.round(currentLocation.main.feels_like)}°C</p>
                  ) : null}
                </FeelsLikeTemp>
                <Humidity>
                  <span>Humidity:</span>
                  {currentLocation.main ? (
                    <p>{currentLocation.main.humidity}%</p>
                  ) : null}
                </Humidity>
                <Wind>
                  <span>Wind Speed:</span>
                  {currentLocation.wind ? (
                    <p>{Math.round(currentLocation.wind.speed)} km/h</p>
                  ) : null}
                </Wind>
              </FeelsLike>
            </Bottom>
          ) : (
            <Bottom>
              <FeelsLike>
                <FeelsLikeTemp>
                  <span className="bold">Feels Like:</span>
                  {data.main ? (
                    <p>{Math.round(data.main.feels_like)}°C</p>
                  ) : null}
                </FeelsLikeTemp>
                <Humidity>
                  <span className="bold">Humidity:</span>
                  {data.main ? <p>{data.main.humidity}%</p> : null}
                </Humidity>
                <Wind>
                  <span className="bold">Wind Speed:</span>
                  {data.wind ? <p>{Math.round(data.wind.speed)} km/h</p> : null}
                </Wind>
              </FeelsLike>
            </Bottom>
          )}
        </Main>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;
  :before {
    content: "";
    background: url(${backgroundImage}) no-repeat center center/cover;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

const Main = styled.div`
  max-width: 700px;
  height: 700px;
  margin: auto;
  padding: 0 1rem;
  position: relative;
  top: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SearchBar = styled.input`
  text-align: center;
  padding: 1rem;
  ::placeholder {
    color: #f8f8f8;
  }
`;

const Top = styled.div`
  width: 100%;
  margin: 1rem auto;
`;

const Location = styled.div``;

const Temp = styled.div``;

const Description = styled.div`
  position: relative;
  right: -90%;
  transform-origin: 0 0;
  transform: rotate(269deg);
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  width: 100%;
  margin: 1rem auto;
  padding: 1rem;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.2);
`;

const FeelsLike = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  .bold {
    font-weight: 700;
  }
`;

const FeelsLikeTemp = styled.div``;

const Humidity = styled.div``;

const Wind = styled.div``;

export default App;
