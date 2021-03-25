import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color:#eb9393 ;
    font-family: 'Poppins', sans-serif;
}

button{
    cursor: pointer;
}

`;

export default GlobalStyle;
