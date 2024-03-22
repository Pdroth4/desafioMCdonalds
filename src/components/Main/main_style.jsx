/** @format */

import styled from "styled-components";

export const Section = styled.section`
  /* border: solid 3px pink; */
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;

  background-color: #ffc72c;

  .destaque {

    width: 80%;
    display: flex;
    align-items: center;
    height: 50vh;
    justify-content: center;
    gap: 400px;
  }

  .destaque h1 {
    width:700px;
    font-size: 65px;
    color: white;
  }

  span{
    color: red;
  }
  
  .imgDestaque {

    display: flex;
    align-items: center;
    width: 400px;
    height: 400px;
  }

  img {
    width: 20vw;
  }

  .figures {
    width: 30vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .bigmac {
    width: 110px;
  }
  .bigmac:hover{
    cursor: pointer;
    transform: scale(1.07);
  }

  .figurasDiv{
    margin-bottom: 100px;
  
  }



`;

export const Card = styled.div`
  
  background-color: white;
  border-radius: 20px;
  width: 20vw;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;


  img {
    width: 100%;
  }
  
  button{
    width: 160px;
    height: 40px;
    background-color: #FFBC0D;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    font-size: 20px;
  }

  button:hover{
    cursor: pointer;
    transform: scale(1.07);
  }
`;


export const Section2 = styled.section `

  background-color: #feb706;


  .destaque{

    display: flex;
    justify-content: center;
    align-items: center;
    height: 16vh;
    color: white;
    font-size: 36px
    ;
  }

  .cards {

    width: 100%;
    display: flex;
    justify-content: space-around;
    height: 50vh;
    align-items: center;
  }
`;