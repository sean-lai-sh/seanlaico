import React , {RefObject}from 'react'
import { FlipWords } from './ui/flip-words'
import BounceArrow from './ui/BounceArrow'
const Hero = ({nextSectionRef, jsDisabled} : {nextSectionRef : RefObject<HTMLDivElement>, jsDisabled? : boolean}) => {
    const words = ['Creator', 'Developer', 'Leader']
    return (
        <section className='w-screen h-screen justify-center items-center flex bg-[#0c0c0c] overflow-hidden'>
            <div className='w-full' > {/* This will run "after" a loading animation to kick start my portfolio */}
                <h1 className='text-center lg:text-5xl md:text-5xl sm:text-4xl text-4xl xl:text-6xl text-white font-tomorrow'>Sean Lai</h1>
                <div className='items-center justify-center py-10  text-white'>
                    {jsDisabled ? <FlipWords  className="text-white font-tomorrow w-full text-center lg:text-4xl text-3xl" words={words}/>
                    
                    : <h2 className='text-white font-tomorrow w-full text-center lg:text-4xl text-3xl'>Creator, Developer, Leader</h2>}
                </div>
                <h3 className='w-full text-white text-center justify-center items-center font-titleFont text-xl'>
                    CS @ NYU `27 
                <span className='invisible md:visible w-full hidden md:inline '>
                | Researcher @ NYU High Speed Research Network
                </span>
                </h3>
                <BounceArrow targetRef={nextSectionRef}/>
            </div>
        </section>
    )
}

export default Hero