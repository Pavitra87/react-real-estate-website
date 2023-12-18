import React from 'react'
import img from "../images/services.jpg"
import Back from "../common/Back"
// import "../home/featured/Featured.css"
import FeaturedCard from "../home/featured/FeaturedCard"

const Services = () => {
  return (
    <>
    <div className="services mb">
    <Back name='Services' title='Services -All Services' cover={img} />
    <div className='featured container'>
          <FeaturedCard />
        </div>
    </div>
      
    </>
  )
}

export default Services
