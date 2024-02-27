import { 
    FaInstagram,
    FaFacebookF,
    FaTiktok,
    FaGoogle,
    FaRegUser
 } from "react-icons/fa";
 import { MdCurrencyExchange } from "react-icons/md"
 import { IoLanguage } from "react-icons/io5"
 import {IoIosArrowDown} from 'react-icons/io'
function NavBar() {
  return (
    <div className="flex flex-col py-2 sticky z-30 bg-gray-200 px-5">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
                <FaInstagram className="cursor-pointer hover:text-blue-600 hover:scale-110"/>
                <FaFacebookF className="cursor-pointer hover:text-blue-600 hover:scale-110"/>
                <FaTiktok className="cursor-pointer hover:text-blue-600 hover:scale-110"/>
                <FaGoogle  className="cursor-pointer hover:text-blue-600 hover:scale-110"/>
            </div>
            <div className="flex items-center">
                <div className="flex items-center space-x-2">
                    <MdCurrencyExchange/>
                    <select name="currency" className="bg-gray-200 text-xl outline-none cursor-pointer">
                        <option value="currency">Currency</option>
                    </select>
                </div>
                <div className="flex items-center space-x-2 ml-7">
                    <IoLanguage/>
                    <select name="language" className="bg-gray-200 text-xl outline-none cursor-pointer">
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
    </div>
  )
}

export default NavBar