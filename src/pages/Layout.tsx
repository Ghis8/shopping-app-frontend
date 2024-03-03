import React, { ReactNode } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'



function Layout({children}:{children:React.ReactNode}) {
  return (
    <div className='h-screen overflow-x-hidden w-screen scrollbar-hide'>
        <NavBar/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout