import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    border: 0;
    outline: 0;
  }
  html, body,#root{
    background-color: var(--background);
    height: 100vh;
  }

  :root{
    //Colors
    --primary: #2A2ABE;
    --secondary: #2B56C6;
    --tertiary: #0C9EF3;
    
    --white: #fff;
    --gray: #8a8c90;
    --text: #43545C;


    --background: #EDF1FA;

    //font sizes & espaços sizes
    --Max-Size:16px;
    --Medium-Size:12px;
    --Small-size:8px;
  }
`;
