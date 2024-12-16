import React, { RefObject } from 'react'
import { motion } from 'framer-motion'
import { IoIosArrowDown } from "react-icons/io";
//Component will be a bouncing arrow that will be used in the hero section
//Upon "click" will scroll down to the next section go down to next section
const BounceArrow = ({targetRef}: {targetRef: RefObject<HTMLDivElement>}) => {
    const scrollToTarget = () => {
        targetRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const bounceAnimation = {
        y: {
            yoyo: Infinity,
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity
        }
    }

    return (
        <motion.div className="w-full h-20 flex justify-center items-center mt-1 md:top-[80%]"
            transition={bounceAnimation}
            animate={{ y: [0, 15,0 ] }}>
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className=" justify-center align-center flex mt-4 px-6 py-2 md:hover:bg-white text-white md:hover:text-blue-600 rounded-full shadow-md hover:shadow-lg"
                onClick={scrollToTarget}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                <IoIosArrowDown className="w-6 h-6" />
            </motion.button>
        </motion.div>
    );

}

export default BounceArrow