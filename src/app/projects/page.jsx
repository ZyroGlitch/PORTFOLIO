"use client";

import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { motion } from 'framer-motion';
import Image from 'next/image'
import project1 from '../../../public/projects/project1.png'
import project2 from '../../../public/projects/project2.png'
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { DiGithubBadge } from "react-icons/di";

const projects = [
    {
        image: <Image src={project1} alt='image' className='object-cover' />,
        title: 'Harmonics',
        description: 'is a powerful eCommerce platform with built-in inventory, sales, and employee account management features.',
        stacks: ["React", "Laravel", "Inertia", "Bootstrap"],
    },
    {
        image: <Image src={project2} alt='image' className='object-cover' />,
        title: "Tungal's Flower Shop",
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum earum aliquam reprehenderit laboriosam, soluta modi?',
        stacks: ["React", "Laravel", "Inertia", "Bootstrap"],
    },
    {
        image: <Image src={project1} alt='image' className='object-cover' />,
        title: 'Harmonics',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum earum aliquam reprehenderit laboriosam, soluta modi?',
        stacks: ["React", "Laravel", "Inertia", "Bootstrap"],
    },
    {
        image: <Image src={project1} alt='image' className='object-cover' />,
        title: 'Harmonics',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum earum aliquam reprehenderit laboriosam, soluta modi?',
        stacks: ["React", "Laravel", "Inertia", "Bootstrap"],
    },
    {
        image: <Image src={project1} alt='image' className='object-cover' />,
        title: 'Harmonics',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum earum aliquam reprehenderit laboriosam, soluta modi?',
        stacks: ["React", "Laravel", "Inertia", "Bootstrap"],
    },
]


export default function page() {
    return (
        <div className='container mx-auto py-[4rem]'>
            <div className="grid gap-[3rem] sm:grid-cols-3">
                {
                    projects.map((project, index) => (
                        <motion.div
                            whileHover={{
                                scale: 1.02
                            }}
                            key={index}
                        >
                            <Card className='min-h-[100px] border-0 shadow-xl rounded-2xl bg-[#211d3e]'>
                                <CardHeader className='p-0'>
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
                                                    className="w-full h-[30px] bg-[#FE7743] rounded-full flex justify-center items-center py-2 px-5"
                                                    key={index}
                                                >
                                                    {stack}
                                                </div>
                                            ))
                                        }
                                    </div>

                                    <Link href="/contact" className='w-full'>
                                        <Button
                                            variant="outline"
                                            className="w-full h-[45px] text-base border-2 rounded-full px-[30px] border-[#FE7743] hover:bg-[#FE7743] hover:border-transparent"
                                        >
                                            <DiGithubBadge className='text-[100px]' /> View Project
                                        </Button>
                                    </Link>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))
                }
            </div>
        </div >
    )
}
