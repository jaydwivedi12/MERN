import React from 'react'
import ImgCard from './ImgCard'
import CardData from './CardData'

const ncard = (val) => {
  return <ImgCard
    key={val.id}
    title={val.title}
    imgsrc={val.imgsrc}
    desc={val.desc} />;
}

const ImgCardSection = () => {
  return (
    <div className='d-flex justify-content-evenly flex-wrap'>
      {CardData.map((val) => {
           return ncard(val);    
      })}

    </div>

  )
}



export default ImgCardSection
