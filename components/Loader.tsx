'use client';
import React, {  } from 'react'
import {motion} from 'framer-motion'
import LoaderCircle from './ui/LoaderCircle';
const Loader = () => {
    const containerUp = {
        hidden: {
            // This telling the loader to show up and hide the content
            // I.e my landing page. Please do not confuse it future me :)
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        
        },
        show: {
            // Technically misleading, this is the "show content" animation
            // This is for telling the loader please showcase the content hidden
            clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)",
            display: "none",
            transition: {
                delay:3,
                duration: 0.6,
                ease: "easeInOut",
            }
        }
    }
    console.log('Loader rendered')
    return (
        <motion.div 
            className='w-screen h-screen inset-0 overflow-hidden bg-[#130303] flex fixed z-50 justify-center items-center top-0'
            variants={containerUp}
            initial="hidden"
            animate="show"
        >
            
                <motion.div className='overflow-y-clip'>
                    <h1 className='lg:text-5xl md:text-5xl sm:text-4xl text-4xl xl:text-6xl text-white font-tomorrow'>
                        Sean
                    </h1>
                </motion.div>
                <div className='w-[200px] relative justify-center items-center flex'>
                    <LoaderCircle />
                </div>
                <motion.div className='overflow-y-clip'>
                    <h1 className='lg:text-5xl md:text-5xl sm:text-4xl text-4xl xl:text-6xl text-white font-tomorrow'>
                        Lai 
                    </h1>
                </motion.div>
        </motion.div>
    )
}

export default Loader