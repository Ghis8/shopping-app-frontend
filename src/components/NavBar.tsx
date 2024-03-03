import { 
    FaInstagram,
    FaFacebookF,
    FaTiktok,
    FaGoogle,
    FaRegUser
 } from "react-icons/fa";
 import { MdCurrencyExchange } from "react-icons/md"
 import { IoLanguage,IoHomeOutline } from "react-icons/io5"
 import {IoIosArrowDown,IoMdMenu} from 'react-icons/io'
 import { BsBucket } from "react-icons/bs"
function NavBar() {
    const navItems=['special offer','contact','sitemap','brand']
  return (
    <>
        <div className="sticky top-0 z-30 py-2 bg-gray-100">
            <div className=" hidden md:flex items-center justify-between px-5">
                <div className="flex items-center gap-5">
                    <FaInstagram className="cursor-pointer hover:text-blue-600 hover:scale-110"/>
                    <FaFacebookF className="cursor-pointer hover:text-blue-600 hover:scale-110"/>
                    <FaTiktok className="cursor-pointer hover:text-blue-600 hover:scale-110"/>
                    <FaGoogle  className="cursor-pointer hover:text-blue-600 hover:scale-110"/>
                </div>
                <div className="flex items-center">
                    <div className="flex items-center space-x-2">
                        <MdCurrencyExchange/>
                        <select name="currency" className="bg-gray-100 text-xl outline-none cursor-pointer">
                            <option value="currency">Currency</option>
                        </select>
                    </div>
                    <div className="flex items-center space-x-2 ml-7">
                        <IoLanguage/>
                        <select name="language" className="bg-gray-100 text-xl outline-none cursor-pointer">
                            <option value="language">Language</option>
                        </select>
                    </div>
                    <div className="flex items-center space-x-2 ml-10">
                        <FaRegUser/>
                        <div className="flex items-center space-x-2 cursor-pointer">
                            <span className="text-xl">Account</span>
                            <IoIosArrowDown />
                        </div>
                    </div>

                </div>
            </div>
            <div className="flex items-center space-x-5 w-screen my-7 px-5">
                <span className="hidden md:inline md:text-2xl">Shopping App</span>
                <IoMdMenu className="md:hidden" size={32} />
                <div className="w-3/4 flex items-center">
                    <input placeholder="Search" className="w-full py-3 indent-2 outline-none"/>
                    <button className="bg-yellow-400 px-5 py-3 text-white font-bold">Search</button>
                </div>
                <div className="flex space-x-5">
                    <div className="flex items-center space-x-5 px-2 md:bg-white py-3 cursor-pointer">
                        <div className="relative">
                            <BsBucket size={28}/>
                            <span className="absolute font-extrabold text-white -top-1 -right-2 bg-yellow-300 rounded-full w-5 h-5 text-center">3</span>
                        </div>
                        <span className="hidden md:inline text-xl">Bag($100)</span>
                    </div>
                    <button className="uppercase text-xl bg-yellow-400 py-3 font-semibold hover:scale-105 rounded-md px-3">join us</button>
                </div>
                
            </div>
        
        </div>
         <div className="bg-blue-900 flex items-center space-x-5 text-white">
            <div className="bg-yellow-400">
                <IoHomeOutline size={42}/>
            </div>
            
            {
                navItems.map((item,index)=>(
                    <div className="cursor-pointer capitalize text-md font-semibold hover:scale-110 hover:text-yellow-400" key={index}>
                        <span>{item}</span>
                    </div>
                ))
            }
        </div>
    </>

  )
}

export default NavBar