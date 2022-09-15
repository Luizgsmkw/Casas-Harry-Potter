import React, { useState, useEffect } from "react";
import * as S from "../styles/StyledHufflepuff";
import axios from "axios";
import alunosHufflepuffImg from "../img/lufa-lufa-neutro.jpg";
function ApiHufflepuff() {
  const [alunosHufflepuff, setAlunosHufflepuf] = useState([]);
  const url = "https://hp-api.herokuapp.com/api/characters";
  useEffect(() => {
    axios
      .get(url)
      .then((response) => setAlunosHufflepuf(response.data))
      .catch((err) => console.log(`Erro na solicitação ${err}`));
  }, []);

  return (
    <>
      <S.GlobalStyle />
      <S.SectionHouser>
        {alunosHufflepuff
          .filter((item) => item.house === "Hufflepuff")
          .map((item) => (
            <S.DivHouser>
              {(item.image && (
                <S.ImgAlunos
                  src={item.image}
                  alt="Imagem de um aluno/a da Grifinória"
                />
              )) ||
                (!item.image && (
                  <S.ImgAlunos
                    src={alunosHufflepuffImg}
                    alt="Imagem de um aluno/a da Lufa-Lufa"
                  />
                ))}
              <S.P>Nome: {item.name}</S.P>
              {(item.patronus && <S.P>Patrono: {item.patronus}</S.P>) ||
                (!item.patronus && <S.P>Patrono: Não indentificado</S.P>)}
              {(item.dateOfBirth && (
                <S.P>Data Nascimento: {item.dateOfBirth}</S.P>
              )) ||
                (!item.dateOfBirth && (
                  <S.P>Data Nascimento: Não indentificado</S.P>
                ))}
            </S.DivHouser>
          ))}
      </S.SectionHouser>
    </>
  );
}

export default ApiHufflepuff;
