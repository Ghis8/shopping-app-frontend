import React from 'react'
import { MdOutlineArrowCircleLeft,MdOutlineArrowCircleRight } from "react-icons/md";
import { rightBarBestSellers } from '../constants';
import { FaStar } from "react-icons/fa";



function RightBar() {
  return (
    <div className='w-1/6 max-h-[400px] overflow-y-auto scrollbar-hide'>
      <div className='sticky top-0 z-20'>
        <div className='flex py-2 px-2 shadow-sm justify-between items-center bg-yellow-400'>
          <span className='font-semibold'>Bestsellers</span>
          <div className='flex items-center space-x-2'>
            <MdOutlineArrowCircleLeft className='cursor-pointer hover:text-blue-600' size={24}/>
            <MdOutlineArrowCircleRight className='cursor-pointer hover:text-blue-600' size={24}/>
          </div>
        </div>
      </div>
      <div className='bg-gray-50'>
        {
          rightBarBestSellers.map(item=>(
            <div className='flex justify-between cursor-pointer mb-4 hover:bg-gray-100 py-2 px-2' key={item.id}>
              <img src={item.img} alt={item.product} className='w-24 h-16'/>
              <div className='flex flex-col '>
                <span className=''>{item.product}</span>
                <div className='flex items-center space-x-2'>
                  <span className='text-xs'>Price : ${item.unitPrice}</span>
                </div>
                <div className='flex  space-x-2'>
                {/* //TODO : Rating issue must be fixed */}
                </div>
                
              </div>
            </div>
          ))
        }
      </div>
      
    </div>
  )
}

export default RightBar