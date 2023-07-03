'use client'
import Image from 'next/image'
import { useState } from 'react'

const Product = () => {
  const [size, setSize] = useState(0)
  const burger = {
    id: 1,
    img: '/feature1.png',
    name: 'Beef Burger',
    price: [25.90, 30.90, 40.90],
    description: "Mouth watering, tasty, and juicy beef burger"
  }
  return (
    <div className='contain h-[calc(100vh_-_100px)] flex bg-[#c72121]'>
      <div className='left-side flex-1 h-full flex items-center justify-center'>
        <div className='imgContainer w-[80%] h-[80%] relative'>
          <Image src={burger.img} fill={true} alt={burger.name} className='object-contain'/>
        </div>
      </div>
      <div className='right-side flex-1 h-full p-5'>
        <h1 className='title text-3xl text-white pb-5'>{burger.name}</h1>
        <span className='price text-white text-2xl font-normal border-b-[1px] border-[#c72121]'>R{burger.price[size].toFixed(2)}</span>
        <p className='description py-5 text-white'>{burger.description}</p>
        <h3 className='choose text-white'>Choose the size:</h3>
        <div className='sizes flex justify-between w-[40%] pt-5'>
          <div className='size w-[30px] h-[30px] relative cursor-pointer text-white' onClick={() => setSize(0)}>
            <Image src='/size_white.png' fill={true} alt='size' />
            <span className='number absolute top-[-5px] right-[-30px] bg-orange-700 text-white text-xs px-1 rounded-sm'>Small</span>
          </div>
          <div className='size w-[40px] h-[40px] relative cursor-pointer' onClick={() => setSize(1)}>
            <Image src='/size_white.png' fill={true} alt='size' />
            <span className='number absolute top-[-5px] right-[-30px] bg-orange-700 text-white text-xs px-1 rounded-sm'>Medium</span>
          </div>
          <div className='size w-[50px] h-[50px] relative cursor-pointer' onClick={() => setSize(2)}>
            <Image src='/size_white.png' fill={true} alt='size' />
            <span className='number absolute top-[-5px] right-[-20px] bg-orange-700 text-white text-xs px-1 rounded-sm'>Large</span>
          </div>
        </div>
        <h3 className='choose py-5 text-white'>Choose additional ingredients:</h3>
        <div className='ingedients flex mb-[30px]'>
        <div className='option flex items-center mr-[10px] text-sm font-medium text-white'>
            <input type="checkbox" name="double" id="double" className='checkbox w-[20px] h-[20px] mr-1' />
            <label htmlFor="double">Double Ingredients</label>
          </div>
          <div className='option flex items-center mr-[10px] text-sm font-medium text-white'>
            <input type="checkbox" name="cheese" id="cheese" className='checkbox w-[20px] h-[20px] mr-1' />
            <label htmlFor="cheese">Extra Cheese</label>
          </div>
          <div className='option flex items-center mr-[10px] text-sm font-medium text-white'>
            <input type="checkbox" name="spicy" id="spicy" className='checkbox w-[20px] h-[20px] mr-1' />
            <label htmlFor="spicy">Spicy Sauce</label>
          </div>
          <div className='option flex items-center mr-[10px] text-sm font-medium text-white'>
            <input type="checkbox" name="garlic" id="garlic" className='checkbox w-[20px] h-[20px] mr-1' />
            <label htmlFor="garlic">Garlic sauce</label>
          </div>
        </div>
        <div className='add'>
          <input type="number" defaultValue={1} className='quantity w-[50px] h-[30px]'/>
          <button className='button h-[30px] ml-[10px] bg-orange-700 text-white text-sm px-2  border-0 rounded-sm font-medium cursor-pointer'>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Product