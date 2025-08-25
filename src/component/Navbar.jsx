import React, { useState } from 'react'
// import assets from '../assets/assets'
import asset from '../assets/assets'

const Navbar = () => {
    const [showMenu, setShowmenu] = useState(false)


    return (
        <div className='absolute top-0 left-0 w-full z-10'>
            <div className='bg-transparent container mx-auto flex justify-between py-4 px-6 md:px-20 lg:px-32  '>
                <img src={asset.logo} alt="" className='' />
                <ul className='hidden md:flex gap-7 text-white '>
                    <a href="#home" className='cursor-pointer hover:text-gray-400'>Home</a>
                    <a href="#about" className='cursor-pointer hover:text-gray-400'>About</a>
                    <a href="#project" className='cursor-pointer hover:text-gray-400'>Project</a>
                    <a href="#testimonial" className='cursor-pointer hover:text-gray-400'>Testimonials</a>
                </ul>
                <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Sign Up</button>
                <img src={asset.menu_icon} onClick={() => setShowmenu(true)} className='md:hidden w-7 pr-0 cursor-pointer' alt="" />
            </div>
            <div className={`md:hidden ${showMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 bg-white overflow-hidden transition-all`}>
                <div className='flex justify-end p-6'>
                    <img src={asset.cross_icon} onClick={() => setShowmenu(false)} className='w-6 cursor-pointer' alt="" />
                </div>

                <ul className=' flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                    <a href="#Header" className='px-4 py-2 rounded-full inline-block'>Home</a>
                    <a href="#about" className='px-4 py-2 rounded-full inline-block'>About</a>
                    <a href="#project" className='px-4 py-2 rounded-full inline-block'>Project</a>
                    <a href="#testimonial" className='px-4 py-2 rounded-full inline-block'>Testimonial</a>
                </ul>
            </div>

        </div>
    )
}

export default Navbar