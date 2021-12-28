import React from 'react'
import InfoSection from '../../components/InfoSection/InfoSection'
import { infoData } from './Data'
function Home() {
  return (
    <>
      {infoData.map((data,index) =>(
        <InfoSection key={index} homeObjOne={data}/>  
      ))}
      {/* <InfoSection homeObjOne={infoData[0]}/>
      <InfoSection homeObjOne={infoData[1]}/> */}

    </>
  )
}

export default Home
