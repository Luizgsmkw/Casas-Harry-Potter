import styled from "styled-components";
import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
body{
  background-color: #053D38;
}

`;


export const H2 = styled.h2 `
text-align: center;
color: whitesmoke;
margin-top: 30px;
`
export const MainHome = styled.main `
display: flex;
align-items: center;
justify-content: space-around;
flex-wrap: wrap;
min-height: 75vh;
`

export const ImgCasas = styled.img `
width: 200px;
border-radius: 20px;
`