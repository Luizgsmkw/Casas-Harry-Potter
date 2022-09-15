import styled from "styled-components";
import { Link } from "react-router-dom";



export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
  background-color: #14140f;

  @media(max-width: 500px){
    padding: 10px 0px;
  }
    
`;

export const Logo = styled.img`
  width: 50px;
`;

export const UlHeader = styled.ul `
  width: 400px;
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  @media(max-width: 500px){
    width: 300px;
  }
`

export const NavLink = styled(Link) `
  text-decoration: none;
  color: white;
`

