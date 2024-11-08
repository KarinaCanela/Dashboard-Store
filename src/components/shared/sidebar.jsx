import React from 'react'
import { RiHome6Line, 
    RiPercentLine, 
    RiPieChartLine, 
    RiMailLine, 
    RiNotification3Line, 
    RiSettings4Line, 
    RiLogoutCircleRLine   } from "react-icons/ri";

const Sidebar = (props) => {
    const {showMenu} = props
  return (
    <div className={`bg-[#1F1D2B] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-2 rounded-tr-xl
    rounded-br-xl z-50 transition-all ${showMenu ? 'left-0' : '-left-full'} `}>
        <div>
            <ul className='pl-2'>
                <li className='text-xl text-gray-300 uppercase font-bold text-center my-5'>
                    Logo
                </li>
                <li className='bg-[#262837] p-[10px] rounded-tl-2xl rounded-bl-2xl'>
                    <a href="#" className='bg-[#ec7c6a] p-[10px] flex justify-center rounded-2xl text-white'>
                        <RiHome6Line className='text-2xl '/>
                    </a>
                </li>
                <li className='p-[10px] rounded-tl-2xl rounded-bl-2xl hover:bg-[#262837] group transition-colors'>
                    <a href="#" className=' group-hover:bg-[#ec7c6a] p-[10px] flex justify-center rounded-2xl 
                    text-[#ec7c6a] group-hover:text-white transition-colors'>
                        <RiPercentLine className='text-2xl '/>
                    </a>
                </li>
                <li className='p-[10px] rounded-tl-2xl rounded-bl-2xl hover:bg-[#262837] group transition-colors'>
                    <a href="#" className=' group-hover:bg-[#ec7c6a] p-[10px] flex justify-center rounded-2xl 
                    text-[#ec7c6a] group-hover:text-white transition-colors'>
                        <RiPieChartLine className='text-2xl '/>
                    </a>
                </li>
                <li className='p-[10px] rounded-tl-2xl rounded-bl-2xl hover:bg-[#262837] group transition-colors'>
                    <a href="#" className=' group-hover:bg-[#ec7c6a] p-[10px] flex justify-center rounded-2xl 
                    text-[#ec7c6a] group-hover:text-white transition-colors'>
                        <RiMailLine className='text-2xl '/>
                    </a>
                </li>
                <li className='p-[10px] rounded-tl-2xl rounded-bl-2xl hover:bg-[#262837] group transition-colors'>
                    <a href="#" className=' group-hover:bg-[#ec7c6a] p-[10px] flex justify-center rounded-2xl 
                    text-[#ec7c6a] group-hover:text-white transition-colors'>
                        <RiNotification3Line className='text-2xl '/>
                    </a>
                </li>
                <li className='p-[10px] rounded-tl-2xl rounded-bl-2xl hover:bg-[#262837] group transition-colors'>
                    <a href="#" className=' group-hover:bg-[#ec7c6a] p-[10px] flex justify-center rounded-2xl 
                    text-[#ec7c6a] group-hover:text-white transition-colors'>
                        <RiSettings4Line className='text-2xl '/>
                    </a>
                </li>
            </ul>
        </div>
        <div>
            <ul className='pl-2'>
                <li className='p-[10px] rounded-tl-2xl rounded-bl-2xl hover:bg-[#262837] group transition-colors'>
                    <a href="#" className=' group-hover:bg-[#ec7c6a] p-[10px] flex justify-center rounded-2xl 
                    text-[#ec7c6a] group-hover:text-white transition-colors'>
                        <RiLogoutCircleRLine className='text-2xl '/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar