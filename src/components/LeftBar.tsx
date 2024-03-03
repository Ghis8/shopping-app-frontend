import React from 'react'
import { leftBarCategoryItems } from '../constants'
import { MdOutlineArrowDropDown } from "react-icons/md";



function SideBar() {
    
  return (
    <div className='w-1/6 max-h-[400px]'>
        <div className=''>
            <div className='flex flex-col py-2 px-2 bg-yellow-400'>
                <span>Category</span>
            </div>
            <div className='py-4 px-3 bg-gray-50'>
                {
                    leftBarCategoryItems.map((item)=>(
                        <div key={item?.id} className='flex items-center justify-between mb-2 cursor-pointer'>
                            <span className='font-thin hover:text-yellow-400 hover:font-bold hover:scale-100'>{item?.name}</span>
                            {
                                //@ts-ignore
                                item?.subItems.length > 0 && <MdOutlineArrowDropDown />
                            }
                            
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default SideBar