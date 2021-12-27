import React from 'react'
import { InfoSec, InfoRow, InfoColumn, TextWrap, TopLine, Heading, Subtitle,ImgWrap,Img } from './InfoSection.Elements'
import { Container,Button } from '../../globalStyles'
import { Link } from 'react-router-dom'
function InfoSection(props) {
  const infoData = props.homeObjOne
  console.log(infoData)
  return (
    <>
      <InfoSec lightBg={infoData.lightBg}>
        <Container>
          <InfoRow imgStart={infoData.imgStart}>
            <InfoColumn lightBg={infoData.lightBg}>
              <TextWrap>
                <TopLine lightBg={infoData.lightBg}>{infoData.topLine}</TopLine>
                <Heading lightBg={infoData.lightBg}>{infoData.heading}</Heading>
                <Subtitle lightBg={infoData.lightBg}>{infoData.subText}</Subtitle>
                <Link to={'/goLink'}><Button big={true}>Get Start</Button></Link>                  
              </TextWrap>
            </InfoColumn>
            <InfoColumn>
              <ImgWrap>
                <Img src={infoData.image} alt={'image'}/>
              </ImgWrap>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  )
}

export default InfoSection
