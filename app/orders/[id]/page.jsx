import styles from '../../Orders.module.css'
import Image from 'next/image'

const Order = () => {
  const status = 0

  const statusClass = (index) => {
    if(index - status < 1) return styles.done
    if(index - status === 1) return styles.inProgress
    if(index - status > 1) return styles.undone
  }
  return (
    <div className='contain p-[50px] flex bg-[#c72121]'>
      <div className='leftside flex-[2]'>
      <div className='firstRow'>
      <table className="table w-full border-spacing-5 ani">
          <thead>
            <tr className="tr text-white">
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">
                <span className="id font-medium text-white text-lg">123456789</span>
              </td>
              <td className="text-center">
                <span className="customer text-white">
                  Jon Doe
                </span>
              </td>
              <td className="text-center">
                <span className="address text-white">100 Voortrekker street, Paul Roux</span>
              </td>
              <td className="text-center">
                <span className="total text-white font-medium text-lg">R51.80</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
        <div className='secondRow flex justify-between w-[80%] mt-20'>
          <div className={statusClass(0) }>
            <Image src='/payment-white.png' width={30} height={30}/>
            <span className='text-white'>Payment</span>
            <div className='checkedIcon'>
              <Image src='/checked.png' width={20} height={20} className={styles.checkedIcon}/>
            </div>
          </div>
          <div className={statusClass(1) }>
            <Image src='/chef-white.png' width={30} height={30}/>
            <span className='text-white'>Preparing</span>
            <div className='checkedIcon'>
              <Image src='/checked.png' width={20} height={20} className={styles.checkedIcon}/>
            </div>
          </div>
          <div className={statusClass(2) }>
            <Image src='/bike-white.png' width={30} height={30}/>
            <span className='text-white'>On the way</span>
            <div className='checkedIcon'>
              <Image src='/checked.png' width={20} height={20} className={styles.checkedIcon}/>
            </div>
          </div>
          <div className={statusClass(3) }>
            <Image src='/delivered-white.png' width={30} height={30}/>
            <span className='text-white'>Delivered</span>
            <div className='checkedIcon'>
              <Image src='/checked.png' width={20} height={20} className={styles.checkedIcon}/>
            </div>
          </div>
        </div>
      </div>
      <div className='rightside flex-1'>
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
            <button disabled className="button h-[30px] text-white bg-[#0d8317]  font-bold cursor-not-allowed mt-5">PAID</button>
          </div>
      </div>
    </div>
  )
}

export default Order