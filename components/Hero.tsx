import React from 'react'
import { FlipWords } from './ui/flip-words'
import {motion} from 'framer-motion'
const Hero = () => {
    const words = ['Creator', 'Developer', 'Entrepreneur']
    return (
        
        <div className='w-full h-screen justify-center items-center flex bg-black'>
            <div className='w-full' > {/* This will run "after" a loading animation to kick start my portfolio */}
                <h1 className='text-center lg:text-5xl md:text-5xl sm:text-4xl text-4xl text-white font-tomorrow'>Sean Lai</h1>
                <div className='items-center justify-center py-10  text-white'>
                    <FlipWords  className="text-white font-tomorrow w-full text-center lg:text-4xl text-3xl" words={words}/>
                </div>
                <h3 className='w-full text-white text-center justify-center items-center font-titleFont text-xl'>
                    CS @ NYU `27 
                <span className='invisible md:visible w-full hidden md:inline '>
                | Researcher @ NYU High Speed Research Network
                </span>
                </h3>
                
            </div>
        </div>
    )
}

export default Hero