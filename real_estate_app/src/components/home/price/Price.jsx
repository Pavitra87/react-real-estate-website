import React from 'react'
import './price.css'
import Heading from "../../common/Heading"
import PriceCard from "./PriceCard"

const Price = () => {
  return (
    <>
    <div className="price padding">
        <div className="conntainer">
        <Heading title='Select Your Package' subtitle='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores' />
          <PriceCard />
        
        </div>
    </div>
      
    </>
  )
}

export default Price
