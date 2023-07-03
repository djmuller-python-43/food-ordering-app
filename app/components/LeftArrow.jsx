'use client'
import Image from "next/image"



const LeftArrow = ({ handleArrow }) => {
 
  return (
    <div className="arrowContainer  w-[20%] h-[30%] absolute top-0 bottom-0 left-0 m-auto md:w-[10%] md:h-[20%] cursor-pointer z-10 drop-shadow-xl" onClick={() => handleArrow('l')}>
      <Image src='/left-arrow.svg' alt='left arrow' fill={true}/>
    </div>
  )
}

export default LeftArrow