"use client";

import React, { createContext } from 'react'
import { useRouter } from 'next/navigation';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../components/ui/card"
import { motion } from 'framer-motion';
import Image from 'next/image'
import project1 from '../../../public/projects/project1.png'
import project2 from '../../../public/projects/project2.png'
import project3 from '../../../public/expense_tracker/image1.png'
import project4 from '../../../public/studd_budd/image1.png'
import project5 from '../../../public/kargadala/image1.png'
import project6 from '../../../public/flashback/image1.png'
import project7 from '../../../public/komyut/image1.png'

import { Button } from '../../components/ui/button';
import Link from 'next/link';
import { DiGithubBadge } from "react-icons/di";
import harmonics1 from '../../../public/harmonics/image1.jpg'
import harmonics2 from '../../../public/harmonics/image2.jpg'
import harmonics3 from '../../../public/harmonics/image3.jpg'
import harmonics4 from '../../../public/harmonics/image4.jpg'
import { FaGithub, FaEye } from "react-icons/fa6";

const projects = [
    {
        id: 0,
        image: <Image src={project1} alt='image' className='object-cover' />,
        title: 'Harmonics',
        description: 'is a powerful eCommerce platform with built-in inventory, sales, and employee account management features.',
        stacks: ["React", "Laravel", "Inertia", "Bootstrap", "MySQL"],
        githubUrl: 'https://github.com/ZyroGlitch/Harmonics-Ecommerce-System',
    },
    {
        id: 1,
        image: <Image src={project2} alt='image' className='object-cover' />,
        title: "Tungal's Flower Shop",
        description: 'is a POS system with built-in inventory, sales, and employee account management for walk-in flower orders.',
        stacks: ["React", "Laravel", "Inertia", "Bootstrap", "MySQL"],
        githubUrl: 'https://github.com/ZyroGlitch/EverBloom-POS-System.git',
    },
    {
        id: 2,
        image: <Image src={project3} alt='image' className='object-cover' />,
        title: 'Expense Tracker',
        description: 'A mobile expense tracker with a connected web admin panel for monitoring transactions, user activity, and financial trends in real time.',
        stacks: ["Flutter", "Firebase", "Laravel", "Bootstrap"],
        githubUrl: 'https://github.com/ZyroGlitch/expense_tracking_app.git',
    },
    {
        id: 3,
        image: <Image src={project4} alt='image' className='object-contain h-[250px]' />,
        title: 'Studd Budd',
        description: 'A study companion app designed to help students build discipline, stay focused, and manage study sessions effectively through guided routines and productivity tools.',
        stacks: ["Flutter"],
        githubUrl: 'https://github.com/ZyroGlitch/Studd-Budd.git',
    },
    {
        id: 4,
        image: <Image src={project5} alt='image' className='object-contain h-[250px]' />,
        title: 'Kargadala',
        description: 'An all-in-one lifestyle app for booking rides, sending packages, paying bills, transferring money, ordering online, and gifting with Kargadala-exclusive gift cards.',
        stacks: ["Flutter"],
        githubUrl: 'https://github.com/ZyroGlitch/KargaDala.git',
    },
    {
        id: 5,
        image: <Image src={project6} alt='image' className='object-contain h-[250px]' />,
        title: 'FlashBack',
        description: 'A photo memory app for saving, organizing, and securing your past and recent pictures swipe to delete or store in a private vault, and unlock full features with a premium subscription.',
        stacks: ["Flutter"],
        githubUrl: 'https://github.com/ZyroGlitch/FlashBack.git',
    },
    {
        id: 6,
        image: <Image src={project7} alt='image' className='object-contain h-[250px]' />,
        title: 'Komyut',
        description: 'A navigation app designed to guide newcomers in Davao City by providing jeepney routes, landmark directions, and real-time mapping support using Google Maps services.',
        stacks: ["Flutter"],
        githubUrl: 'https://github.com/ZyroGlitch/KOMYUT.git',
    },
]

export const ProjectDetailsContext = createContext();



export default function page() {

    const router = useRouter();

    const viewHarmonics = (project) => {
        router.push(`/projects/view_project?id=${project.id}`);
    }

    return (
        <motion.div
            className='mx-[3rem] py-[3rem] sm:container sm:mx-auto sm:py-[4rem]
        '
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
        >
            <div className="grid gap-[3rem] sm:grid-cols-3 items-stretch">
                {
                    projects.map((project, index) => (
                        <motion.div
                            whileHover={{
                                scale: 1.02
                            }}
                            key={index}
                        >
                            <Card className='flex flex-col justify-between h-full border-0 shadow-xl rounded-2xl bg-[#211d3e]'>
                                <CardHeader className='p-0 flex justify-center items-center'>
                                    {project.image}
                                </CardHeader>
                                <CardContent>
                                    <h2 className="text-2xl font-bold text-[#FE7743]">
                                        {project.title}
                                    </h2>
                                    <p className="text-base text-justify">
                                        {project.description}
                                    </p>
                                </CardContent>
                                <CardFooter className='flex flex-col items-start'>
                                    <p className='font-semibold text-[#FE7743] mb-2'>Tech Stacks</p>

                                    <div className="grid gap-4 w-full grid-cols-3 sm:grid-cols-3 mb-[1.5rem]">
                                        {
                                            project.stacks?.map((stack, index) => (
                                                <div
                                                    className="w-full h-[30px] bg-[#3a3364] rounded-full flex justify-center items-center py-2 px-5"
                                                    key={index}
                                                >
                                                    {stack}
                                                </div>
                                            ))
                                        }
                                    </div>

                                    <div className="flex flex-col lg:flex-row justify-center items-center gap-4 w-full">
                                        <Button
                                            variant="outline"
                                            className="w-full sm:w-[160px] h-[45px] text-base border-2 rounded-full px-[30px] border-[#FE7743] flex justify-center items-center gap-[.5rem] hover:bg-[#FE7743] hover:border-transparent"
                                            onClick={() => project.githubUrl && window.open(project.githubUrl, '_blank')}
                                        >
                                            <FaGithub /> Github
                                        </Button>

                                        <Button
                                            variant="outline"
                                            className="w-full sm:w-[160px] h-[45px] text-base border-2 rounded-full px-[30px] border-[#FE7743] flex justify-center items-center gap-[.5rem]  hover:bg-[#FE7743] hover:border-transparent"
                                            onClick={() => viewHarmonics(project)}
                                        >
                                            <FaEye /> View Project
                                        </Button>
                                    </div>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))
                }
            </div>
        </motion.div >
    )
}
