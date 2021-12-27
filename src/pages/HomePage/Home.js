import React from 'react'
import InfoSection from '../../components/InfoSection/InfoSection'
import { homeObjOne } from './Data'
function Home() {
  return (
    <div>
      <InfoSection homeObjOne={homeObjOne}/>
    </div>
  )
}

export default Home
