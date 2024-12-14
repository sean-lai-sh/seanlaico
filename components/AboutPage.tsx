import React from 'react'
import Image from 'next/image'
const AboutPage = () => {
  return (
    <section className='w-full h-100vh flex-row flex'>
        <h1>About Me:</h1>
        <div className='w-full flex flex-row px-20 bg-black pt-10'>
            <div className='lg:max-h-[50vh] lg:max-w-[50vh]'>
                <img src="/images/sean_l.jpg" className=''>
                
                </img>
            </div>
            <div>
                
                <p>Malaysian Born CS Student at NYU. I am someone who identifies and grasps opportunities at hand
                    Some highlighted skills; </p>
                
            
            </div>
        </div>
        <div className='grid-rows-1 grid-cols-5 max-'>
            <div className='col-span-1'>
                <img>

                </img>                    
            </div>
            <div className='col-span-1'>
                <img>
                </img>
            </div>
            
        </div>
    </section>
  )
}

export default AboutPage