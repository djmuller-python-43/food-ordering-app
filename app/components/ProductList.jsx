import React from 'react'
import ProductCard from './ProductCard'

const ProductList = () => {
  return (
    <div className='contain px-[10px] bg-red-600 flex flex-col items-center'>
      <h1 className='title text-center text-2xl md:text-3xl text-white md:py-10'>THE BEST BURGERS IN TOWN</h1>
      <p className='description text-xl w-[98%] lg:text-2xl text-[#d1cece] md:w-[60%] text-center pt-5'>
        If you ever wanted to know what the best tasting burger tastes like, you have come to the right place. 
      </p>
      <p className=' text-xl w-[98%] pt-5 lg:text-2xl text-white md:w-[60%] text-center md:pb-5'>These are the best burgers in town</p>
      <div className='wrapper flex pb-5 items-center justify-center w-full flex-wrap'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}

export default ProductList