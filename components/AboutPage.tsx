import React , {forwardRef} from 'react'
import { RiNextjsFill } from "react-icons/ri";
const AboutPage = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section className='w-full min-h-[100vh] flex-col flex bg-black text-white' ref={ref}>
        <h1 className='w-full text-left px-10 md:px-20 py-5 text-3xl'>About Me:</h1>
        <div className='w-full flex flex-col md:flex-row sm:px-10 pt-5'>
            <div className='lg:max-h-[50vh] lg:max-w-[30vw] md:max-w-[60vw] md:max-h-[60vh] px-5 pb-5 md:pb-0'>
                <img src="/images/sean_l.jpg" className='rounded-lg shadow-md shadow-blue-600 w-full' width={800} height={800}>
                
                </img>
            </div>
            <div className='px-10 w-full pt-5 sm:pt-0'>
                
                <p>Malaysian Born CS Student at NYU. I am someone who identifies and grasps opportunities at hand
                    Some highlighted skills; </p>
                
            
            </div>
        </div>
        <div className='grid-rows-5 grid-cols-1 w-full min-h-[20vh] px-10 lg:py-20'>
          <RiNextjsFill className='row-span-1 h-[20vh] w-20'/>                  
           
        </div>
    </section>
  )
});

export default AboutPage