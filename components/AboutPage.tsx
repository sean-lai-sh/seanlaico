import React from 'react'
import { RiNextjsFill } from "react-icons/ri";
const AboutPage = () => {
  return (
    <section className='w-full h-100vh flex-col flex bg-black text-white'>
        <h1 className='w-full text-center px-10'>About Me:</h1>
        <div className='w-full flex flex-col sm:flex-row md:px-20 sm:px-10 pt-10 min-h-[50vh]'>
            <div className='lg:max-h-[50vh] lg:max-w-[50vh] px-5'>
                <img src="/images/sean_l.jpg" className='rounded-lg shadow-md shadow-blue-600 w-full h-full'>
                
                </img>
            </div>
            <div className='px-10 w-full pt-5 sm:pt-0'>
                
                <p>Malaysian Born CS Student at NYU. I am someone who identifies and grasps opportunities at hand
                    Some highlighted skills; </p>
                
            
            </div>
        </div>
        <div className='grid-rows-5 grid-cols-1 w-full min-h-[20vh] px-10'>
                <RiNextjsFill className='row-span-1 h-[20vh] w-20'/>                  
            
        </div>
    </section>
  )
}

export default AboutPage