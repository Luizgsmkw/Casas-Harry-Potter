import React from "react";
import { Link } from "react-router-dom";
import LogoHp from "../img/9205fbd9c087988027a83b83b26265cd-removebg-preview.png";
import * as S from "../styles/StyledHeader";

function Header() {
  return (
    <S.Header>
      <Link to="/">
        <S.Logo src={LogoHp} alt="Logo do filme Harry Potter" />
      </Link>
      <nav>
        <S.UlHeader>
          <li>
            <S.NavLink to="/Gryffindor">Grifinória</S.NavLink>
          </li>
          <li>
            <S.NavLink to="/Hufflepuff">Lufa-lufa</S.NavLink>
          </li>
          <li>
            <S.NavLink to="/Ravenclaw">Corvinal</S.NavLink>
          </li>
          <li>
            <S.NavLink to="/Slytherin">Sonserina</S.NavLink>
          </li>
        </S.UlHeader>
      </nav>
    </S.Header>
  );
}

export default Header;
