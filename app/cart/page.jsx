import Image from "next/image"

const Cart = () => {
  return (
    <div className="contain p-[50px] flex bg-[#c72121]">
      <div className="leftside flex-[2] mr-5">
        <table className="table w-full border-spacing-5">
          <thead>
            <tr className="tr text-white">
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="imgContainer w-[100px] h-[100px] relative ml-5">
                  <Image src='/feature1.png' alt='' fill={true} priority sizes="(max-width: 768px) 100vw" className="object-contain"/>
                </div>
              </td>
              <td className="text-center">
                <span className="name font-medium text-white text-lg">BEEF BURGER</span>
              </td>
              <td className="text-center">
                <span className="extras text-white">
                  Double ingredient, spicy sauce
                </span>
              </td>
              <td className="text-center">
                <span className="price text-white">R25.90</span>
              </td>
              <td className="text-center">
                <span className="quantity text-white">2</span>
              </td>
              <td className="text-center">
                <span className="total text-white font-medium text-lg">R51.80</span>
              </td>
            </tr>
            <tr>
              <td>
                <div className="imgContainer w-[100px] h-[100px] relative ml-5">
                  <Image src='/feature1.png' alt='' fill={true} priority sizes="(max-width: 768px) 100vw" className="object-contain"/>
                </div>
              </td>
              <td className="text-center">
                <span className="name font-medium text-white text-lg">BEEF BURGER</span>
              </td>
              <td className="text-center">
                <span className="extras text-white">
                  Double ingredient, spicy sauce
                </span>
              </td>
              <td className="text-center">
                <span className="price text-white">R25.90</span>
              </td>
              <td className="text-center">
                <span className="quantity text-white">2</span>
              </td>
              <td className="text-center">
                <span className="total text-white font-medium text-lg">R51.80</span>
              </td>
            </tr>
            <tr>
              <td>
                <div className="imgContainer w-[100px] h-[100px] relative ml-5">
                  <Image src='/feature1.png' alt='' fill={true} priority sizes="(max-width: 768px) 100vw" className="object-contain"/>
                </div>
              </td>
              <td className="text-center">
                <span className="name font-medium text-white text-lg">BEEF BURGER</span>
              </td>
              <td className="text-center">
                <span className="extras text-white">
                  Double ingredient, spicy sauce
                </span>
              </td>
              <td className="text-center">
                <span className="price text-white">R25.90</span>
              </td>
              <td className="text-center">
                <span className="quantity text-white">2</span>
              </td>
              <td className="text-center">
                <span className="total text-white font-medium text-lg">R51.80</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="rightside flex-1">
        <div className="wrapper w-[90%] max-h-[300px] bg-gray-800 p-[50px] pt-[20px] flex flex-col justify-between text-white">
          <h2 className="title text-white font-bold text-xl">CART TOTAL</h2>
          <div className="totalText mt-5">
            <b className="totalTextTitle mr-[10px]">SubTotal:</b>R51.80
          </div>
          <div className="totalText">
            <b className="totalTextTitle mr-[10px]">Discount:</b>R0.00
          </div>
          <div className="totalText">
            <b className="totalTextTitle mr-[10px]">Total:</b>R51.80
          </div>
          <button className="button h-[30px] text-white bg-[#c72121] font-bold cursor-pointer mt-5">CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
  )
}

export default Cart