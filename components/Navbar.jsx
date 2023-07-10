import Image from "next/image"


const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-[100px] px-[50px] bg-black sticky top-0 z-20">
     <div className="item flex flex-3 md:flex md:flex-1 md:items-center">
      <div className="call-button bg-red-700  p-[12px] rounded-full">
        <Image src='/phone-flip.svg' alt="phone" width={24} height={24} className="hidden"/>
        <Image src='/phone-flip.svg' alt="phone" width={24} height={24} className=""/>
      </div>
      <div className="texts ml-5 text-white">
        <div className="text text-sm">ORDER NOW</div>
        <div className="text text-lg font-bold">012 345 6789</div>
      </div>
     </div>
     <div className="item md:flex md:flex-[3] md:items-center">
      <ul className="list p-0 flex items-center  list-none text-white">
        <li className="listItem hidden m-5 font-medium text-lg">Homepage</li>
        <li className="listItem hidden m-5 font-medium text-lg">Products</li>
        <li className="listItem hidden m-5 font-medium text-lg">Menu</li>
        <Image src='/Logo-dec1e77f.jpeg' priority sizes="(max-width: 768px) 100vw" width={300} height={70} alt='logo' style={{width: '300px', height: '70px'}} className="hidden"/>
        <li className="listItem hidden m-5 font-medium text-lg">Contact</li>
      </ul>
     </div>
     <div className="item flex flex-1 items-center justify-end">
      <div className="cart relative">
        <Image src='/cart.svg' width={30} height={30} alt='cart'/>
      <div className="counter absolute top-[-8px] right-[-8px] w-5 h-5 rounded-full bg-white p-1 text-red-700 flex items-center justify-center font-bold">2</div>
      </div>
     </div>
    </div>
  )
}

export default Navbar