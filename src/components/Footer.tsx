import React from 'react'
import { FaLocationDot,FaTelegram } from "react-icons/fa6"
import { MdEmail,MdCall } from "react-icons/md"

function Footer() {
    const footerItems=[
        {
            title:"Information",
            items:['about us','delivery information','privacy policy','terms and conditions','contact us']
        },
        {
            title:"Extras",
            items:['brands','gift certificates','affiliate','specials','site maps']
        },
        {
            title:'My Account',
            items:['my account','order history','wish list','newsletter','returns']
        }
    ]
  return (
    <>
        <div className='flex justify-evenly text-white bg-black py-3 px-5'>
            <div className=''>
                <span className='font-bold text-xl'>Contact us</span>
                <div className='flex flex-col space-y-1 mt-5'>
                    <div className='flex items-center space-x-2'>
                        <FaLocationDot />
                        <span className='text-gray-300 font-thin capitalize cursor-pointer'>Fashion Store</span>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <MdEmail />
                        <a className='text-gray-300 font-thin capitalize cursor-pointer' href='mailto:ghislainkongolo0@gmail.com'>ghislainkongolo0</a>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <MdCall />
                        <a className='text-gray-300 font-thin capitalize cursor-pointer' href='tel:+250783771485'>+250783771485</a>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <FaTelegram />
                        <span className='text-gray-300 font-thin capitalize cursor-pointer'>Ghis</span>
                    </div>
                </div>
            </div>
            {
                footerItems.map((item,index)=>(
                    
                    <div className='' key={index}>
                        <span className='font-bold text-xl'>{item.title}</span>
                        <div className='flex flex-col space-y-1 mt-5'>
                            {
                                item.items.map((i,key)=>(
                                    <span className='text-gray-300 font-thin capitalize cursor-pointer' key={key}>{i}</span>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
        <div className='bg-gray-700 py-2 px-5 text-white'>
            <span>&copy; Ghis</span>
        </div>
    </>
  )
}

export default Footer