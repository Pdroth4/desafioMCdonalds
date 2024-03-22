/** @format */
import React, { useState } from 'react';
import * as S from './main_style';
import bigmac from "../../assets/bigmac.svg";
import sorvete from "../../assets/sorvete.svg";
import batata from "../../assets/batata.svg";
import sofa from "../../assets/sofa.png";
import loja from "../../assets/loja.png";
import juntos from "../../assets/juntos.png";
import Card from "./Card";

function Main() {
  
  const [imagemDestacada, setImagemDestacada] = useState(bigmac);

 
  const handleImagemDestacada = (imagem) => {
    setImagemDestacada(imagem);
  };

  return (
    <main>
      <S.Section>
        <div className='destaque'>
          <div className="imgDestaque">
          <img src={imagemDestacada} alt="" />
          </div>
          
          <h1>BATEU AQUELA <span>#FOME</span> DE <span>MÉQUI</span>?</h1>
        </div>


        <div className="figurasDiv">
        <figure className='figures'>
          
          <img className="bigmac" src={bigmac} alt="" onClick={() => handleImagemDestacada(bigmac)} />
          <img className="bigmac" src={batata} alt="" onClick={() => handleImagemDestacada(batata)} />
          <img className="bigmac" src={sorvete} alt="" onClick={() => handleImagemDestacada(sorvete)} />
        </figure>
        </div>

      </S.Section>

      <S.Section2 className='cards'>

        <div className="destaque">
        <h2>Promoção</h2>
        </div>
        
        <div className='cards'>
          <Card imagem={sofa} texto={"Que tal um #MéquiNoSofá?"} />
          <Card imagem={loja} texto={"Venha conhecer nossa nova loja"} />
          <Card imagem={juntos} texto={"Confira as medidas que o Méqui adotou!"} />
        </div>
      </S.Section2>
    </main>
  );
}

export default Main;
