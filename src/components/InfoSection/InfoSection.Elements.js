import styled from "styled-components";

export const InfoSec = styled.div`
  color: #fff;
  padding: 160px 0;
  background: ${({lightBg})=> (lightBg ? '#fff' : '#101522')};

`

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items:start;
  flex-direction: ${({imgStart})=>(imgStart ? 'row-reverse' :'row')};

`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;

  @media screen and (max-width: 768px){
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }

`
export const TextWrap = styled.div`
  max-width: 540px;
  padding-top: 0 ;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`

export const TopLine = styled.div`
  color: ${({lightBg})=>(lightBg ? '#4b59f7': '#a9b3c1')};
  font-size: 18px;
  line-height:16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size:48px;
  line-height: 1.1;
  color: ${({lightBg})=>(lightBg ? '#1c2237': '#f7f8fa')};

`

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom:35px;
  font-size: 18px;
  line-height:24px;
  color: ${({lightBg})=>(lightBg ? '#1c2237': '#a9b3c1')};

`

export const ImgWrap = styled.div`
  max-width: 555px;
  display: flex;
  /* align-items: start; */

  /* justify-content:${({imgStart})=>(imgStart ? 'flex-start' : "start-end")}; */
`

export const Img = styled.img`
  border-radius: 15%;
  box-shadow: 5px 10px 20px #a9b3c1;
  padding-right: 0;
  border: 0;
  max-width: 100%;
  /* vertical-align: middle; */
  display: inline-block;
  max-height:500px;
`