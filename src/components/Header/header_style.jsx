/** @format */

// Depois da instalação do styled-components, fazer o import
import styled, { createGlobalStyle } from "styled-components";

// Reset da pagina (esse reset esta dentro do app)
export const GlobalStyle = createGlobalStyle`

 * {
     margin: 0;
     padding: 0;
     box-sizing:border-box;
     font-family: sans-serif;
 }

`;

//estilo da Header
export const Header = styled.header`
  /* border: solid 2px red; */
  display: flex;
  align-items:center;
  justify-content: space-between;
  padding-inline: 75px
  ;
  height: 8vh;

  .logoHeader{
    width: 60px;
  }
  .logoHeader:hover{
    cursor: pointer;
  }

  .sHeader {
    
    display: flex;
    justify-content: space-around;
    width: 20vw;;
  }

  div {
    /* border: solid 2px; */
    display: flex;
  }

  section {
    display: flex;
  }

  .mequi {
    background-color: #FFC72C;
    font-size: 13px;
    border-radius: 8px ;
    width: 175px;
    height: 45px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
  }

  .mequi:hover{
    cursor: pointer;
    transform: scale(1.03);
  }

  .baixarApp {
 
    border-radius: 8px;
    width: 160px;
    height: 45px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
  }

  .baixarApp:hover{
    cursor: pointer;
    transform: scale(1.03);
  }
`;
