import React from 'react'
import assets from '../assets/assets'

const About = () => {
  return (
    <div  className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='about'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 font-light'>Our Brand</span></h1>
        <p className='text-gray-800 max-w-80 text-center mb-8'>Passionate about properties, we gat you covered.</p>

        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
            <img src={assets.brand_img} alt='' className='w-full sm:w-1/2 max-w-lg'/>
            <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
                <div className='grid grid-cols-2  gap-6 md:gap-10 w-full 2xl:pr-28'>
                    <div>
                        <p className=' text-4xl font-medium text-gray-800'>10+ Experience</p>
                        <p>Years of excellence</p>
                    </div>
                    <div>
                        <p className=' text-4xl font-medium text-gray-800'>20+ Experience</p>
                        <p>Learning Progression</p>
                    </div>
                    <div>
                        <p className=' text-4xl font-medium text-gray-800'>8+ Experience</p>
                        <p>Abundantly achieve</p>
                    </div>
                    <div>
                        <p className=' text-4xl font-medium text-gray-800'>10+ Experience</p>
                        <p>Years of Building</p>
                    </div>
                </div>
                <p className='my-10 max-w-lg'>Lorem ipsum dolor sit amet co
                    nsectetur adipisicing elit. Minima ex dolores reiciendis nihil
                      quidem maiores est repellat, numquam facilis architecto ad expedita perferendis perspiciatis fuga rem fugiat beatae, illum laboriosam.</p>
                <button className='bg-blue-600 text-white px-8 py-2 rounded'>Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default About