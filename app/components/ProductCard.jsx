import Image from 'next/image'
import React from 'react'

const ProductCard = () => {
  return (
    <div className='contain w-full md:w-[22%] px-[10px] py-[20px] shadow-sm shadow-[#f04545] flex flex-col items-center justify-centers cursor-pointer'>
      <Image src='/feature1.png' alt='pizza' width={500} height={500} className=''/>
      <h1 className='title text-2xl md:text-xl font-bold text-[#d1cece] '>Beef Burger</h1>
      <span className='price text-xl md:text-lg font-bold text-[#d1cece]'>R40.90</span>
      <p className='description text-lg text-center w-[80%] text-[#f1f0f0]'>Mouth watering, tasty and, juicy beef burger</p>
    </div>
  )
}

export default ProductCard