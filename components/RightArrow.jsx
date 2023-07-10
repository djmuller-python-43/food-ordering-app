'use client'
import Image from "next/image"




const RightArrow = ({ handleArrow }) => {
  
  return (
    <div className="arrowContainer w-[20%] h-[30%] absolute top-0 bottom-0 right-0 m-auto md:w-[10%] md:h-[20%] cursor-pointer" onClick={() => handleArrow('r')}>
      <Image src='/right-arrow.svg' alt='right arrow' fill={true}/>
    </div>
  )
}

export default RightArrow