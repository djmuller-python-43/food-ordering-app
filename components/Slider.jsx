'use client'
import { useState } from 'react'
import Image from 'next/image'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'

const Slider = () => {
  const [index, setIndex] = useState(0)

  const handleArrow = (direction) => {
    if(direction === 'l') {
      setIndex(index !== 0 ? index -1 : 2)
    }
    if(direction === 'r') {
      setIndex(index !== 2 ? index +1 : 0)
    }
  }
  console.log(index)

  const images = [
    "/feature1.png",
    "/feature2.png",
    "/feature3.png"
  ]

  return (
    <div className='bg-[#c72121] h-[50%] md:h-[calc(100vh_-_100px)] md:overflow-hidden md:relative'>
      <LeftArrow handleArrow={handleArrow}/>
      <div className='wrapper w-[300vw] h-[100%] flex transition-all duration-[3.5s] ease-in-out' style={{transform:`translateX(${-100*index}vw)`}}>
          { images.map((image, i) => (
            <div className='imgContainer ml-9 flex justify-center w-[95vw] h-[80vh]  md:w-[99vw] md:h-[80vh] relative ' key={i}>
              <Image src={image}  alt={image} fill={true} className='object-contain'/>
            </div>
          )) }
      </div>
      <RightArrow handleArrow={handleArrow}/>
    </div>
  )
}

export default Slider