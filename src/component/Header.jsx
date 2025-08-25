import React from 'react'
import Navbar from './Navbar'
import asset from '../assets/assets'
const Header = () => {
    return (
        <div className='min-h-screen mb-4 bg-cover flex items-center w-full overflow-hidden ' style={{ backgroundImage: `url(${asset.header_img})` }} id='Header'>
            <Navbar />
            <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
                <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>Explore homes that fit your dreams</h2>
                <div className='space-x-6 mt-16'>
                    <a href="#project" className='border border-white px-8 py-3 rounded'>Project</a>
                    <a href="#contact" className='px-8 py-3 rounded bg-blue-500'>Contact Us</a>
                </div>
            </div>

        </div>
    )
}

export default Header