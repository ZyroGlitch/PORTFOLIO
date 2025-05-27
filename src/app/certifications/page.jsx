'use client';

import Image from 'next/image'
import React from 'react'
import certiport1 from '../../../public/certifications/database.jpg'
import certiport2 from '../../../public/certifications/html.jpg'
import certiport3 from '../../../public/certifications/honor.jpg'
import { motion } from 'framer-motion';

export default function page() {
    return (
        <motion.div
            className='grid py-[5rem] items-stretch gap-[3.5rem] mx-[3rem]  sm:container sm:mx-auto sm:grid-cols-3 sm:gap-8 '
            initial={{ y: '-100vh' }}
            animate={{ y: 0 }}
            transition={{ duration: 5, type: 'spring', stiffness: 45 }}
        >

            <motion.div
                className="flex flex-col items-center h-full"
                whileHover={{
                    scale: 1.03,
                    transition: { duration: 0.3 }
                }}
            >
                <Image src={certiport1} alt='Image' className='object-cover rounded-xl mb-4' />
                <h2 className="text-2xl font-bold">Database</h2>
            </motion.div>

            <motion.div
                className="flex flex-col items-center h-full"
                whileHover={{
                    scale: 1.03,
                    transition: { duration: 0.3 }
                }}
            >
                <Image src={certiport2} alt='Image' className='object-cover rounded-xl mb-4' />
                <h2 className="text-2xl font-bold">HTML & CSS</h2>
            </motion.div>

            <motion.div
                className="flex flex-col items-center h-full"
                whileHover={{
                    scale: 1.03,
                    transition: { duration: 0.3 }
                }}
            >
                <Image
                    src={certiport3}
                    alt='Image'
                    className='object-coverrounded-xl mb-6' />
                <h2 className="text-2xl font-bold">Honor Certiport</h2>
            </motion.div>
        </motion.div >

    )
}
