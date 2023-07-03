import Image from "next/image"


const Footer = () => {
  return (
    <div className="contain h-[calc(100vh_-_100px)] bg-[#222] flex">
      <div className="item flex-1 relative flex ml-10">
        <Image src='/bg.jpeg' fill={true} priority sizes="(max-width: 768px) 100vw" alt='logo' className="object-contain"/>
      </div>
      <div className="item flex-1 relative flex p-12 justify-between">
        <div className="card flex-1 px-5">
          <h2 className="motto text-2xl pt-5 text-[#b3b3b3]">
            OH YEAH, WE DO THE BEST BURGERS IN TOWN!
          </h2>
        </div>
        <div className="card px-3">
          <h1 className="title text-lg text-[#b7903c] py-5">FIND OUR RESTAURANT</h1>
          <p className='text text-lg text-gray-300'>
            13 Lourens Street,
            <br />
            Paul Roux,
            <br />
            9800
          </p>
        </div>
        <div className="card flex-1 px-5">
          <h1 className="title text-lg text-[#b7903c] py-5">WORKING HOURS</h1>
          <p className="text text-gray-300">
            MONDAY - FRIDAY
            <br />
            09:00 - 22:00
            <br />
          </p>
          <p className="text text-gray-300">
            SATURDAY
            <br />
            10:00 - 00:00
            <br />
          </p>
          <p className="text text-gray-300">
            SUNDAY 
            <br />
            12:00 - 22:00
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer