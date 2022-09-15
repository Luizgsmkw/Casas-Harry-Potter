import React from "react";
import imgGryffindor from "../img/grifinoria.jpg";
import imgLufaLufa from "../img/lufa-lufa.jpg";
import imgCorvinal from "../img/corvinal.jpg";
import imgSonserina from "../img/sonserina.jpg";
import * as S from "../styles/StyledHome";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <S.GlobalStyle />
      <S.H2>Escolha uma das casas para ver os alunos!</S.H2>
      <S.MainHome>
        <Link to="/Gryffindor">
          <S.ImgCasas src={imgGryffindor} alt="Imagem da casa Grifinória" />
        </Link>
        <Link to="/Hufflepuff">
          <S.ImgCasas src={imgLufaLufa} alt="Imagem da casa Lufa-Lufa" />
        </Link>
        <Link to="/Ravenclaw">
          <S.ImgCasas src={imgCorvinal} alt="Imagem da casa Corvinal" />
        </Link>
        <Link to="/Slytherin">
          <S.ImgCasas src={imgSonserina} alt="Imagem da casa Sonserina" />
        </Link>
      </S.MainHome>
    </>
  );
}

export default Home;
