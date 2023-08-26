import React, { useEffect, useState } from 'react'
import ImgCard from './ImgCard'
// import CardData from './CardData'

const ncard = (val) => {
  return <ImgCard
    key={val.id}
    title={val.title}
    imgsrc={val.thumbnail}
    desc={val.description} />;
}

const ImgCardSection = () => {

  const [Data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch('https://fakestoreapi.com/products')
        // const Data = await response.json();
        // setData(Data);

        const response = await fetch("https://dummyjson.com/products")
        const Data=await response.json();
        setData(Data.products)
      }
      catch (error) {
        console.log("Congratulation You got an error ", error)
      }
    };
    fetchData();
  },[]);
  return (
    <div className='d-flex justify-content-evenly flex-wrap'>
      {Data.map((val) => {
        return ncard(val);
      })}
    </div>

  )
}



export default ImgCardSection
