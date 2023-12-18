import React from 'react'
import Hero from './hero/Hero'
import Featured from './featured/Featured'
import Recent from './recent/Recent'
import Award from './awards/Award'
import Location from './location/Location'
import Price from './price/Price'
import Team from './team/Team'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Featured/>
      <Recent/>
      <Award/>
      <Location/>
      <Price/>
      <Team/>
    </div>
  )
}

export default Home
