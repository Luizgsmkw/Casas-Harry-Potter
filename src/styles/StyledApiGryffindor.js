import styled from "styled-components";
import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
body{
  background-color: #D77A41;
}

`;

export const SectionHouser = styled.section `
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
align-items: center;
`

export const DivHouser = styled.div `
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 280px;
  
`

export const ImgAlunos = styled.img `

width: 200px;
height: 300px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
border-radius: 6%;

`

export const P = styled.p `
text-align: center;

`