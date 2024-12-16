import React, { useEffect } from 'react'
import {useAnimation, motion} from 'framer-motion'
const LoaderCircle = () => {
    const control_lower_line = useAnimation();
    const control_upper_line = useAnimation();
    useEffect(() => {
        // Set of commands telling the "order" of the animations since this is a multi stage animation
        async function animateLower() {
            await control_lower_line.start("spinCircle");
            await control_lower_line.start("transformToLineBottom");
            await control_lower_line.start("moveToEndBottom");
            await control_lower_line.start("endAnimation");
        }
        animateLower()
        async function animateUpper() {
            await control_upper_line.start("spinCircle");
            await control_upper_line.start("transformToLineUpper");
            await control_upper_line.start("moveToEndUpper");
            await control_upper_line.start("endAnimation");
        }
        animateUpper()

    }, [control_lower_line, control_upper_line])
    const loaderAnimation = {
        // Do a 360 degree rotation
        spinCircle: {
            rotate: 2520,
            transition: {
                duration: 1.5,
                ease: "linear",

            }
        },
        // Animation for "bottom Line"
        // Squish circle into a thin "line"
        transformToLineBottom: {
            height: "8px",
            // Adjust this to be at the bottom of the circle
            y: "50px",
            borderRadius: "0px",
 
            transition: {
                duration: 0.25,
                ease: "easeInOut",
            }
        },
        // We are to now move this all the way to the left of the screen, from original position to left most position having said line
        moveToEndBottom: {
            x: "-50vw", // Moves the element to the left
            width: "60vw", // Expands width to proportional to vw
            background: "white", // Correct lowercase `background`
            border: "0px solid white", // Correct border property
            borderRadius: "0px", // Remove border radius
            transition: {
                duration: 1.25,
                ease: "easeInOut",
            },
        },
        transformToLineUpper: {
            height: "8px",
            // Adjust this to be at the Upper of the circle
            y: "-50px",
            borderRadius: "0px",
            transition: {
                duration: 0.25,
                ease: "linear",
            }
        },
        // We are to now move this all the way to the right of the screen, from original position to left most position having said line
        moveToEndUpper: {
            x: "50vw", // Moves the element to the right
            width: "60vw", // Expands width to proportional to vw
            background: "white", // Correct lowercase `background`
            border: "0px solid white", // Correct border property
            borderRadius: "0px", // Remove border radius
            transition: {
                duration: 1.25,
                ease: "easeInOut",
            },
        },

        // Retract the line from the original to the left most position
        endAnimation: {
            scaleX: 1,
            width: "0px",
            display: "none",
            transition: {
                duration: 0.5,
                ease: "linear",
            }
            
        }
    }
    // className={`justify-center items-center flex bg-black w-[100px] h-[50px] rounded-bl-[100px] rounded-br-[100px]`}
    return (
        < >

            {/* Border the spins around a circle */}
            <motion.div 
                className='block w-[150px] h-[150px] border-b-8  border-b-[#e4e4e4] rounded-full box-border absolute'
                variants={loaderAnimation}
                animate={control_lower_line}
            />
            <motion.div 
                className='block w-[150px] h-[150px] border-t-8  border-t-[#e4e4e4] rounded-full box-border absolute'
                variants={loaderAnimation}
                animate={control_upper_line}
            />
        </>
    )
}

export default LoaderCircle