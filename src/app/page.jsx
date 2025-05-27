'use client';

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import profile from '../../public/profile.png'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';


export default function App() {
  return (
    <div className="">
      <motion.div
        className="grid sm:grid-cols-2 container mx-auto pt-[5rem] place-content-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Left Side: Image Section */}
        <motion.div
          className="min-h-[150px] sm:min-h-[400px] flex justify-center items-center"
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
        >
          {/* Profile Image */}
          <Image
            src={profile}
            alt="profile"
            className="w-[200px] h-[200px] object-cover bg-slate-200 rounded-full border-6 border-[#FE7743] sm:w-[350px] sm:h-[350px]"
          />
        </motion.div>

        {/* Right Side: Text Section */}
        <div className="min-h-[200px] flex flex-col justify-center sm:min-h-[400px]">
          <div className="mb-2 text-center sm:text-start">
            <h4 className="text-lg text-[#FE7743] font-bold sm:text-2xl">HELLO!</h4>
            <motion.h1
              className="text-3xl font-bold sm:text-5xl text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              I'm
              <TypeAnimation
                sequence={[
                  ' John Ford Buliag',
                ]}
                speed={200}
                wrapper='span'
                className="text-[#FE7743]"
              />
            </motion.h1>
          </div>

          <motion.h2 className="text-base font-semibold text-white mb-6 text-center sm:text-start sm:text-xl">
            <TypeAnimation
              sequence={[
                2000,
                'A Full Stack Laravel Developer', 1000,
                'Improving, One Line at a Time', 1000,
                'Always Seeking Growth', 1000,
              ]}
              speed={150}
              repeat={Infinity}
            />
          </motion.h2>

          <div className="flex items-center gap-4">
            <Link href="/contact">
              <Button
                variant="outline"
                className="h-[45px] text-base border-2 rounded-full px-[30px] border-[#FE7743] hover:bg-[#FE7743] hover:border-transparent"
              >
                Contact Me
              </Button>
            </Link>

            <Link
              href="https://drive.google.com/file/d/1pjTuMmhnShUzsksROW3rtOMylp0VWffW/view?usp=sharing"
              target="_blank"
            >
              <Button className="bg-[#FE7743] h-[45px] text-base rounded-full px-[30px]">
                Download CV
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
