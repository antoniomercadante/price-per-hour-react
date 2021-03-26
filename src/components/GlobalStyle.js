import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}

body {
    color: white;
    font-family: 'Poppins', sans-serif;
    height: 100vh;
}

button{
    cursor: pointer;
}

`;

export default GlobalStyle;
