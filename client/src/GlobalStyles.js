import { createGlobalStyle } from "styled-components";

//global reset!

export default createGlobalStyle`
  :root {
    font-family: 'Inter', sans-serif;
    --padding-page: 24px;
  }

  ::-webkit-scrollbar {
  }
  ::-webkit-scrollbar-track {
  }
  ::-webkit-scrollbar-thumb {
}
::-webkit-scrollbar-thumb:hover {
}

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    font-family: 'Inter', sans-serif;
      margin: 0;
      padding: 0;
      border: 0;
      box-sizing: border-box;
      font-size: 100%;
      vertical-align: baseline;
      text-decoration: none;
  }

 p {
    font-size: 1.6rem;
 }
 h2 {
    font-size: 6rem;
 }
 span {
    font-weight: 300;
    font-size: 1.3rem;
 }
input {
    padding: 0.7rem 1.5rem;
    font-size: 1.2rem;
    border-radius: 25px;
    border: 1px solid rgba(255,255,255, 0.8);
    background: rgba(255,255,255,.1);
    color: #f8f8f8
  } 

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
  }
  body {
      line-height: 1;
  }
  ol, ul {
      list-style: none;
  }
  a:visited {
    color: black;
  }
  a:hover {
    color: #666699;
  }

  button {
    font-size: 1rem;
    width: 150px;
    height: 40px;
    text-align: center;
    background-color: #7575a3;
    color: white;
    border: none;
    border-radius: 8px;
    margin: 10px;
    padding: 10px 20px;
    
  }
  button:hover {
    background-color: #666699;
    cursor: pointer;
    border: none;
    box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.45);
  }
  h1,
h2,
h3,
label {

}
p,
a,
li,
blockquote,
input {
 
}

  input {
 
  }
  .scrollhost::-webkit-scrollbar {
  display: none;
}
`;
