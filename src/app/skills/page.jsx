"use client";

import Lottie from 'lottie-react';
import React from 'react'
import animationData from '../../../public/lottie/skills.json';
import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiLaravel,
    DiMysql,
    DiGit,
    DiGithubBadge,
    DiJava,
    DiPython,
    DiReact,
    DiDart,
    DiBootstrap,
} from "react-icons/di";
import { FaAnglesRight } from "react-icons/fa6";
import { LuEqualApproximately } from "react-icons/lu";
import { AiFillFire } from "react-icons/ai";
import { motion } from 'framer-motion';

const used = [
    { name: "Laravel", icon: <DiLaravel className="text-4xl text-[#FE7743]" /> },
    { name: "React", icon: <DiReact className="text-4xl text-[#FE7743]" /> },
    { name: "Inertia", icon: <FaAnglesRight className="text-4xl text-[#FE7743]" /> },
    { name: "Tailwind", icon: <LuEqualApproximately className="text-4xl text-[#FE7743]" /> },
    { name: "Bootstrap", icon: <DiBootstrap className="text-4xl text-[#FE7743]" /> },
    { name: "MySQL", icon: <DiMysql className="text-4xl text-[#FE7743]" /> },
]

const others = [
    { name: "HTML", icon: <DiHtml5 className="text-4xl text-[#FE7743]" /> },
    { name: "CSS", icon: <DiCss3 className="text-4xl text-[#FE7743]" /> },
    { name: "Javascript", icon: <DiJsBadge className="text-4xl text-[#FE7743]" /> },
    { name: "Java", icon: <DiJava className="text-4xl text-[#FE7743]" /> },
    { name: "Python", icon: <DiPython className="text-4xl text-[#FE7743]" /> },
    { name: "Dart", icon: <DiDart className="text-4xl text-[#FE7743]" /> },
    { name: "Firebase", icon: <AiFillFire className="text-4xl text-[#FE7743]" /> },
    { name: "Git", icon: <DiGit className="text-4xl text-[#FE7743]" /> },
    { name: "Github", icon: <DiGithubBadge className="text-4xl text-[#FE7743]" /> }
]

export default function page() {
    return (
        <motion.div
            className='grid sm:grid-cols-2 pt-[3rem] container mx-auto'
            initial={{ y: '-100vh' }}
            animate={{ y: 0 }}
            transition={{ duration: 2, type: 'spring', stiffness: 60 }}
        >
            <div className="min-h-[100px] flex justify-center items-center">
                <Lottie animationData={animationData} loop={true} className='w-[300px] h-[300px] mb-[2rem] sm:w-[450px] sm:h-[450px]'
                />
            </div>

            <div className="min-h-[100px]">
                <div className="mb-12 sm:mb-8">
                    <h2
                        className="text-xl font-bold text-center text-white mb-4 sm:text-2xl sm:text-start"
                    >
                        Most Used Programming Languages
                    </h2>

                    <div className="grid gap-3 grid-cols-3 sm:grid-cols-5 sm:gap-5">
                        {
                            used.map((skill, index) => (
                                <motion.div
                                    className="flex flex-col items-center py-2"
                                    key={index}
                                    initial={{ y: 0 }}
                                    whileHover={{
                                        y: [0, -10, 0],
                                        transition: {
                                            duration: 1,
                                            ease: 'easeInOut',
                                            repeat: Infinity,
                                            repeatType: 'loop',
                                        },
                                    }}
                                >
                                    {skill.icon}
                                    <p className="text-sm">{skill.name}</p>
                                </motion.div>
                            ))
                        }
                    </div>
                </div>

                <div className="">
                    <h2
                        className="text-xl text-center font-bold text-white mb-4 sm:text-start sm:text-2xl"
                    >
                        Others
                    </h2>

                    <div className="grid gap-3 grid-cols-3 sm:grid-cols-5 sm:gap-5">
                        {
                            others.map((skill, index) => (
                                <motion.div
                                    className="flex flex-col items-center py-2"
                                    key={index}
                                    initial={{ y: 0 }}
                                    whileHover={{
                                        y: [0, -10, 0],
                                        transition: {
                                            duration: 1,
                                            ease: 'easeInOut',
                                            repeat: Infinity,
                                            repeatType: 'loop',
                                        },
                                    }}
                                >
                                    {skill.icon}
                                    <p className="text-sm">{skill.name}</p>
                                </motion.div>
                            ))
                        }
                    </div>
                </div>
            </div>


        </motion.div >
    )
}
