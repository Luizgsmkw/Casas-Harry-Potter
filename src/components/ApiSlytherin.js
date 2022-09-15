import React, { useState, useEffect } from "react";
import * as S from "../styles/StyledApiSlytherin";
import axios from "axios";
import alunosSlytherinImg from "../img/sonserina-neutro.jpg";

function ApiSlytherin() {
  const [alunosSlytherin, setAlunosSlytherin] = useState([]);
  const url = "http://hp-api.herokuapp.com/api/characters";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => setAlunosSlytherin(response.data))
      .catch((err) => console.log(`Erro na solicitação ${err}`));
  }, []);

  return (
    <>
      <S.GlobalStyle />
      <S.SectionHouser>
        {alunosSlytherin
          .filter((item) => item.house === "Slytherin")
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
                    src={alunosSlytherinImg}
                    alt="Imagem de um aluno/a da Grifinória"
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

export default ApiSlytherin;
