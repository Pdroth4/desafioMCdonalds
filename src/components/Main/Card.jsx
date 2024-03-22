/** @format */
// não esqueça de conectar
import * as S from "./main_style";
//  O que são Props?
// Props, abreviação de "propriedades", em React são uma forma de passar dados de um componente pai para um componente filho no React.

//  Para que servem?
//  Reutilização de Componentes
//  Comunicação entre Componentes
//  Customização e Configuração

//{imagem, texto} assim conseguimos customizar nossos cards dentro da Main.jsx
export default function Card({ imagem, texto }) {
  return (
    <S.Card>
      <img src={imagem} alt="img" />
      <h3>{texto}</h3>
      <button>clique</button>
    </S.Card>
  );
}
