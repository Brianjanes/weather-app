import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const App = () => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=REACT_APP_OPEN_WEATHER_API_KEY`;
  return (
    <Container>
      <Top>
        <Location>
          <h2>St. John's</h2>
        </Location>
        <Temp>
          <p>69F</p>
        </Temp>
        <Description>
          <p>cloudy</p>
        </Description>
      </Top>
      <Bottom>
        <FeelsLike>
          <FeelsLikeTemp>65F</FeelsLikeTemp>
          <Humidity>24%</Humidity>
          <Wind>30km/h</Wind>
        </FeelsLike>
      </Bottom>
    </Container>
  );
};

const Container = styled.div``;

const Top = styled.div``;

const Location = styled.div``;

const Temp = styled.div``;

const Description = styled.div``;

const Bottom = styled.div``;

const FeelsLike = styled.div``;

const FeelsLikeTemp = styled.div``;

const Humidity = styled.div``;

const Wind = styled.div``;

export default App;
