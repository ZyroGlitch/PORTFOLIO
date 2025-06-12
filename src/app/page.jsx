'use client';

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import profile from '../../public/profile.png'
import { Button } from '../components/ui/button'
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { LuGithub, LuFacebook, LuInstagram } from "react-icons/lu";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert"
import { CheckCircle2Icon, Loader2Icon } from "lucide-react"


export default function App() {

  const formRef = useRef(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default form submission
    setIsLoading(true);
    setShowSuccess(false);

    // Manually trigger form submission after setting state
    setTimeout(() => {
      formRef.current?.submit();
    }, 100); // slight delay ensures button state updates before submission
  };


  const handleLoad = () => {
    if (formRef.current) {
      formRef.current.reset();
      setIsLoading(false);
      setShowSuccess(true);
    }
  };

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => setShowSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  return (
    <div className="py-[5rem] relative">
      {showSuccess && (
        <Alert className="fixed top-4 right-4 z-50 w-[90%] max-w-md bg-green-600 border-0 shadow-lg text-white">
          <CheckCircle2Icon className="mr-2 h-5 w-5 text-white" />
          <AlertTitle>Success!</AlertTitle>
          <AlertDescription>
            Your form has been submitted. Please wait for a response via email.
          </AlertDescription>
        </Alert>
      )}

      <motion.div
        className="grid container mx-auto place-content-center mb-[10rem] gap-y-[2rem] sm:grid-cols-2 sm:gap-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Left Side: Image Section */}
        <motion.div
          className="min-h-[150px] flex justify-center items-center sm:min-h-[400px]"
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

          <div className="flex justify-center items-center gap-[1rem] sm:justify-start">
            <Link
              href="https://github.com/ZyroGlitch"
              target="_blank"
            >
              <Button
                variant="outline"
                className="h-[50px] w-[50px] border-2 rounded-full px-[30px] border-[#FE7743] hover:bg-[#FE7743] hover:border-transparent mb-[1rem]"
              >
                <LuGithub className='text-lg' />
              </Button>
            </Link>

            <Link
              href="https://www.facebook.com/johnford.buliag.2"
              target="_blank"
            >
              <Button
                variant="outline"
                className="h-[50px] w-[50px] border-2 rounded-full px-[30px] border-[#FE7743] hover:bg-[#FE7743] hover:border-transparent mb-[1rem]"
              >
                <LuFacebook className='text-lg' />
              </Button>
            </Link>

            <Link
              href="https://www.instagram.com/johnfordbuliag/"
              target="_blank"
            >
              <Button
                variant="outline"
                className="h-[50px] w-[50px] border-2 rounded-full px-[30px] border-[#FE7743] hover:bg-[#FE7743] hover:border-transparent mb-[1rem]"
              >
                <LuInstagram className='text-lg' />
              </Button>
            </Link>
          </div>

          <Link
            href="https://drive.google.com/file/d/1pjTuMmhnShUzsksROW3rtOMylp0VWffW/view?usp=sharing"
            target="_blank"
            className='text-center sm:text-start'
          >
            <Button className="bg-[#FE7743] h-[45px] text-base rounded-full px-[30px] w-[250px] sm:w-auto">
              Download CV
            </Button>
          </Link>
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col items-center justify-around gap-y-[2rem] sm:flex-row sm:items-start sm:gap-0"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }} // trigger when 20% of item is visible
      >
        <div className="w-[400px] text-center sm:text-start">
          <h2 className="text-3xl font-bold text-[#FE7743] mb-[1rem]">
            Contact me for collaboration
          </h2>
          <p className="text-base text-white">
            Reach out today to discuss your project needs to start collaborating on something amazing.
          </p>
        </div>

        {/* ✅ Hidden iframe placed OUTSIDE for clean layout */}
        <iframe
          name="hidden_iframe"
          style={{ display: 'none' }}
          onLoad={handleLoad}
        />

        <Card className='w-[400px] border-0 p-0'>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            action="https://formsubmit.co/j.buliag.530734@umindanao.edu.ph"
            method="POST"
            target="hidden_iframe"
          >
            {/* ✅ Optional Hidden Fields */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="http://localhost:3000/" /> {/* You can change this to your deployment URL */}

            <CardContent className='mb-[1.5rem]'>
              <Input
                type='text'
                placeholder='Name'
                className='bg-[#211d3e] mb-[1rem] border-0 shadow'
                name='name'
                required
              />
              <Input
                type='email'
                placeholder='Email'
                className='bg-[#211d3e] mb-[1rem] border-0 shadow'
                name='email'
                required
              />
              <Textarea
                placeholder='Type your message here.'
                className='bg-[#211d3e] border-0 shadow h-[150px]'
                name='message'
                required
              />
            </CardContent>
            <CardFooter>
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-[#FE7743] w-full h-[45px] text-base rounded-full px-[30px] shadow"
              >
                {isLoading ? (
                  <>
                    <Loader2Icon className="animate-spin mr-2 h-4 w-4" />
                    Please wait
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
            </CardFooter>
          </form>
        </Card>

      </motion.div>
    </div >
  )
}
