'use client';
import React, {  } from 'react'
import {motion} from 'framer-motion'
import LoaderCircle from './ui/LoaderCircle';
const Loader = () => {
    
    // async function myAnimation(){ // An animation that will animate a imagine container and set it to black
    //     await animate("#ImageCon", {clipPath:"", display:"none"}) // Empty clipPath to reveal the image
    // }

    // // useEffect( () => {
    // //     myAnimation()
    // // }, [])

    // const move = { 
    // // This will become the defacto animation for the loader, chanigng whether we want an "up" or "down" animation or "left" or "right"
    //     hidden : (i:number[]) => ({
    //         y:"100%",
    //         x: i[0],
    //     }),
    //     moveUp : {
    //         y: 0,
    //         transition: (i: number[])=> ({
    //             delay: i[1],
    //             duration: 0.4,
    //             ease: "easeInOut",
    //         })
    //     },
    //     moveLeft : {
    //         x: "-10px",
    //         transition: ()=> ({
    //             delay: 0.8,
    //             duration: 0.4,
    //             ease: "easeInOut",
    //         })
    //     },
    //     moveRight : {
    //         x: "10px",
    //         transition: ()=> ({
    //             delay: 0.8,
    //             duration: 0.4,
    //             ease: "easeInOut",
    //         })
    //     },
    // }

    const containerUp = {
        hidden: {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        
        },
        show: {
            clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)",
            display: "none",
            transition: {
                delay:4,
                duration: 0.6,
                ease: "easeInOut",
            }
        }
    }

    return (
        <motion.div 
            className='w-screen h-screen inset-0 overflow-hidden bg-[#0c0c0c] flex absolute z-50 justify-center items-center flex'
            variants={containerUp}
            initial="hidden"
            animate="show"
        >
            <LoaderCircle />
        </motion.div>
    )
}

export default Loader