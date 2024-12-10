import React from 'react'
import { FlipWords } from './ui/flip-words'

const Hero = () => {
    const words = ['Creator', 'Developer', 'Aspiring Entrepreneur']
    return (
        <div className='w-full h-screen justify-center items-center flex bg-black'>
            <div className='w-full'>
                <h1 className='text-center lg:text-5xl md:text-5xl text-2xl text-white font-contentFont '>Sean Lai Sheng Hong</h1>
                <h2 className='items-center justify-center  text-white'><FlipWords  className="text-white font-contentFont w-full text-center lg:text-4xl md:text-3xl text-lg" words={words}/></h2>
                <h3 className='w-full text-white text-center justify-center items-center'>
                    CS @ NYU `27 
                <span className='invisible md:visible w-full md:inline '>
                | Researcher @ NYU High Speed Research Network
                </span>
                </h3>
                
            </div>
        </div>
    )
}

export default Hero