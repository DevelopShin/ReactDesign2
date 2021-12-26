import styled, { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family:  'Source Sans Pro', sans-serif;
  }

`;

export const Container = styled.div`
  z-index: 1;
  width:100%;
  max-width:1300px;
  margin-right:auto;
  margin-left: auto;
  padding:0 50px;

  @media screen and ( max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`
export const Button = styled.button`
  border-radius: 4px;
  background: ${({primary})=>(primary ? '#4b59f7' : '#0467fb')};
  white-space: nowrap;
  padding:20px
`

export default GlobalStyle