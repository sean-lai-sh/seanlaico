import { AppProps } from 'next/app';
import {useState, useEffect} from 'react';
import Loader from '@/components/Loader';
import {motion} from 'framer-motion';
export default function MyApp({ Component, pageProps }: AppProps) {
    

    return (
      <div>
        {/* { isHydrated && <>
            <Loader />
            <motion.div className="bg-[#05051d] overflow-x-clip absolute inset-0 z-20 mix-blend-exclusion" variants={containerUp} initial="hidden" animate="show" />
        </>} */}
        <Component {...pageProps} />
      </div>
    );
}

