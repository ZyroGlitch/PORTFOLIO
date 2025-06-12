'use client';

import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import project1 from '../../../../public/projects/project1.png';
import project2 from '../../../../public/projects/project2.png';
import { motion } from 'framer-motion';

import harmonics1 from '../../../../public/harmonics/landing_page.png';
import harmonics2 from '../../../../public/harmonics/image1.jpg';
import harmonics3 from '../../../../public/harmonics/image2.jpg';
import harmonics4 from '../../../../public/harmonics/image3.jpg';
import harmonics5 from '../../../../public/harmonics/image4.jpg';
import harmonics6 from '../../../../public/harmonics/image5.jpg';
import harmonics7 from '../../../../public/harmonics/image6.jpg';
import harmonics8 from '../../../../public/harmonics/image7.jpg';
import harmonics9 from '../../../../public/harmonics/image8.jpg';
import harmonicsA1 from '../../../../public/harmonics/image9.jpg';
import harmonicsA2 from '../../../../public/harmonics/image9About.jpg';
import harmonicsA3 from '../../../../public/harmonics/image9Inventory.jpg';
import harmonicsA4 from '../../../../public/harmonics/imageA1.jpg';
import harmonicsA5 from '../../../../public/harmonics/imageA2.jpg';
import harmonicsA6 from '../../../../public/harmonics/imageA3.jpg';
import harmonicsA7 from '../../../../public/harmonics/imageA4.jpg';
import harmonicsA8 from '../../../../public/harmonics/imageA5.jpg';
import harmonicsA9 from '../../../../public/harmonics/imageA6.jpg';
import harmonicsB1 from '../../../../public/harmonics/imageA7.jpg';
import harmonicsB2 from '../../../../public/harmonics/imageA8.jpg';
import harmonicsB3 from '../../../../public/harmonics/imageA9.jpg';
import harmonicsB4 from '../../../../public/harmonics/imageA9Orders.jpg';
import harmonicsB5 from '../../../../public/harmonics/imageB1.jpg';
import harmonicsB6 from '../../../../public/harmonics/imageB2.jpg';
import harmonicsB7 from '../../../../public/harmonics/imageB3.jpg';
import harmonicsB8 from '../../../../public/harmonics/imageB4.jpg';
import harmonicsB9 from '../../../../public/harmonics/imageB5.jpg';
import harmonicsC1 from '../../../../public/harmonics/imageB6.jpg';
import harmonicsC2 from '../../../../public/harmonics/imageB7.jpg';
import harmonicsC3 from '../../../../public/harmonics/imageB8.jpg';

import flower1 from '../../../../public/tungal_flower/image1.jpg';
import flower2 from '../../../../public/tungal_flower/image2.jpg';
import flower3 from '../../../../public/tungal_flower/image3.jpg';
import flower4 from '../../../../public/tungal_flower/image4.jpg';
import flower5 from '../../../../public/tungal_flower/image5.jpg';
import flower6 from '../../../../public/tungal_flower/image6.jpg';
import flower7 from '../../../../public/tungal_flower/image7.jpg';
import flower8 from '../../../../public/tungal_flower/image8.jpg';
import flower9 from '../../../../public/tungal_flower/image9.jpg';
import flower10 from '../../../../public/tungal_flower/imageA1.jpg';
import flower11 from '../../../../public/tungal_flower/imageA2.jpg';

import expense2 from '../../../../public/expense_tracker/image3.png';
import expense3 from '../../../../public/expense_tracker/image4.png';
import expense4 from '../../../../public/expense_tracker/image5.png';
import expense5 from '../../../../public/expense_tracker/image6.png';
import expense6 from '../../../../public/expense_tracker/image7.png';
import expense7 from '../../../../public/expense_tracker/image8.png';
import expense8 from '../../../../public/expense_tracker/image9.png';
import expense9 from '../../../../public/expense_tracker/imageA1.png';
import expenseA1 from '../../../../public/expense_tracker/imageA2.png';
import expenseA2 from '../../../../public/expense_tracker/imageA3.png';
import expenseA3 from '../../../../public/expense_tracker/imageA4.png';
import expenseA4 from '../../../../public/expense_tracker/imageA5.png';
import expenseA5 from '../../../../public/expense_tracker/imageA6.png';

import study1 from '../../../../public/studd_budd/image1.png';
import study2 from '../../../../public/studd_budd/image2.png';
import study3 from '../../../../public/studd_budd/image3.png';
import study4 from '../../../../public/studd_budd/image4.png';
import study5 from '../../../../public/studd_budd/image5.png';
import study6 from '../../../../public/studd_budd/image6.png';
import study7 from '../../../../public/studd_budd/image7.png';
import study8 from '../../../../public/studd_budd/image8.png';
import study9 from '../../../../public/studd_budd/image9.png';
import studyA1 from '../../../../public/studd_budd/imageA1.png';
import studyA2 from '../../../../public/studd_budd/imageA2.png';
import studyA3 from '../../../../public/studd_budd/imageA3.png';
import studyA4 from '../../../../public/studd_budd/imageA4.png';
import studyA5 from '../../../../public/studd_budd/imageA5.png';
import studyA6 from '../../../../public/studd_budd/imageA6.png';
import studyA7 from '../../../../public/studd_budd/imageA7.png';
import studyA8 from '../../../../public/studd_budd/imageA8.png';
import studyA9 from '../../../../public/studd_budd/imageA9.png';

import kargadala1 from '../../../../public/kargadala/image1.png';
import kargadala2 from '../../../../public/kargadala/image2.png';
import kargadala3 from '../../../../public/kargadala/image3.png';
import kargadala4 from '../../../../public/kargadala/image4.png';
import kargadala5 from '../../../../public/kargadala/image5.png';
import kargadala6 from '../../../../public/kargadala/image6.png';
import kargadala7 from '../../../../public/kargadala/image7.png';
import kargadala8 from '../../../../public/kargadala/image8.png';
import kargadala9 from '../../../../public/kargadala/image9.png';
import kargadalaA1 from '../../../../public/kargadala/imageA1.png';
import kargadalaA2 from '../../../../public/kargadala/imageA2.png';
import kargadalaA3 from '../../../../public/kargadala/imageA3.png';
import kargadalaA4 from '../../../../public/kargadala/imageA4.png';
import kargadalaA5 from '../../../../public/kargadala/imageA5.png';
import kargadalaA6 from '../../../../public/kargadala/imageA6.png';
import kargadalaA7 from '../../../../public/kargadala/imageA7.png';
import kargadalaA8 from '../../../../public/kargadala/imageA8.png';
import kargadalaA9 from '../../../../public/kargadala/imageA9.png';
import kargadalaB1 from '../../../../public/kargadala/imageB1.png';
import kargadalaB2 from '../../../../public/kargadala/imageB2.png';
import kargadalaB3 from '../../../../public/kargadala/imageB3.png';
import kargadalaB4 from '../../../../public/kargadala/imageB4.png';

import flash1 from '../../../../public/flashback/image1.png';
import flash2 from '../../../../public/flashback/image2.png';
import flash3 from '../../../../public/flashback/image3.png';
import flash4 from '../../../../public/flashback/image4.png';
import flash5 from '../../../../public/flashback/image5.png';
import flash6 from '../../../../public/flashback/image6.png';
import flash7 from '../../../../public/flashback/image7.png';
import flash8 from '../../../../public/flashback/image8.png';
import flash9 from '../../../../public/flashback/image9.png';
import flashA1 from '../../../../public/flashback/imageA1.png';

import komyut1 from '../../../../public/komyut/image1.png';
import komyut2 from '../../../../public/komyut/image2.png';
import komyut3 from '../../../../public/komyut/image3.png';
import komyut4 from '../../../../public/komyut/image4.png';
import komyut5 from '../../../../public/komyut/image5.png';
import komyut6 from '../../../../public/komyut/image6.png';
import komyut7 from '../../../../public/komyut/image7.png';
import komyut8 from '../../../../public/komyut/image8.png';
import komyut9 from '../../../../public/komyut/image9.png';
import komyutA1 from '../../../../public/komyut/imageA1.png';
import komyutA2 from '../../../../public/komyut/imageA2.png';
import komyutA3 from '../../../../public/komyut/imageA3.png';
import komyutA4 from '../../../../public/komyut/imageA4.png';
import komyutA5 from '../../../../public/komyut/imageA5.png';
import komyutA6 from '../../../../public/komyut/imageA6.png';
import komyutA7 from '../../../../public/komyut/imageA7.png';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { CarouselApi } from '@/components/ui/carousel'; // Adjust path if needed

const projects = [
    {
        previewImage: [
            <Image src={harmonics1} alt='image' className='object-contain w-[430px] rounded-lg shadow-lg sm:w-[1200px] sm:h-[500px] sm:object-fill' />,
            <Image src={harmonics2} alt='image' className='object-contain w-[430px] rounded-lg shadow-lg sm:w-[1200px] sm:h-[500px] sm:object-fill' />,
            <Image src={harmonics3} alt='image' className='object-contain w-[430px] rounded-lg shadow-lg sm:w-[1200px] sm:h-[500px] sm:object-fill' />,
            <Image src={harmonics4} alt='image' className='object-contain w-[430px] rounded-lg shadow-lg sm:w-[1200px] sm:h-[500px] sm:object-fill' />,
            <Image src={harmonics5} alt='image' className='object-contain w-[430px] rounded-lg shadow-lg sm:w-[1200px] sm:h-[500px] sm:object-fill' />,
            <Image src={harmonics6} alt='image' className='object-contain w-[430px] rounded-lg shadow-lg sm:w-[1200px] sm:h-[500px] sm:object-fill' />,
            <Image src={harmonics7} alt='image' className='object-contain w-[430px] rounded-lg shadow-lg sm:w-[1200px] sm:h-[500px] sm:object-fill' />,
            <Image src={harmonics8} alt='image' className='object-contain w-[430px] rounded-lg shadow-lg sm:w-[1200px] sm:h-[500px] sm:object-fill' />,
            <Image src={harmonics9} alt='image' className='object-contain w-[430px] rounded-lg shadow-lg sm:w-[1200px] sm:h-[500px] sm:object-fill' />,

            <Image src={harmonicsA1} alt='image' className='object-contain w-[430px] rounded-lg shadow-lg sm:w-[1200px] sm:h-[500px] sm:object-fill' />,
            <Image src={harmonicsA2} alt='image' className='object-contain w-[430px] rounded-lg shadow-lg sm:w-[1200px] sm:h-[500px] sm:object-fill' />,
            <Image src={harmonicsA3} alt='image' className='object-contain w-[430px] rounded-lg shadow-lg sm:w-[1200px] sm:h-[500px] sm:object-fill' />,
            <Image src={harmonicsA4} alt='image' className='object-contain w-[430px] rounded-lg shadow-lg sm:w-[1200px] sm:h-[500px] sm:object-fill' />,
            <Image src={harmonicsA5} alt='image' className='object-contain w-[430px] rounded-lg shadow-lg sm:w-[1200px] sm:h-[500px] sm:object-fill' />,
            <Image src={harmonicsA6} alt='image' className='object-contain w-[430px] rounded-lg shadow-lg sm:w-[1200px] sm:h-[500px] sm:object-fill' />,
            <Image src={harmonicsA7} alt='image' className='object-contain w-[430px] rounded-lg shadow-lg sm:w-[1200px] sm:h-[500px] sm:object-fill' />,
            <Image src={harmonicsA8} alt='image' className='object-contain w-[430px] rounded-lg shadow-lg sm:w-[1200px] sm:h-[500px] sm:object-fill' />,
            <Image src={harmonicsA9} alt='image' className='object-contain w-[430px] rounded-lg shadow-lg sm:w-[1200px] sm:h-[500px] sm:object-fill' />,

            <Image src={harmonicsB1} alt='image' className='object-contain w-[430px] rounded-lg shadow-lg sm:w-[1200px] sm:h-[500px] sm:object-fill' />,
            <Image src={harmonicsB2} alt='image' className='object-contain w-[430px] rounded-lg shadow-lg sm:w-[1200px] sm:h-[500px] sm:object-fill' />,
            <Image src={harmonicsB3} alt='image' className='object-contain w-[430px] rounded-lg shadow-lg sm:w-[1200px] sm:h-[500px] sm:object-fill' />,
            <Image src={harmonicsB4} alt='image' className='object-contain w-[430px] rounded-lg shadow-lg sm:w-[1200px] sm:h-[500px] sm:object-fill' />,
            <Image src={harmonicsB5} alt='image' className='object-contain w-[430px] rounded-lg shadow-lg sm:w-[1200px] sm:h-[500px] sm:object-fill' />,
            <Image src={harmonicsB6} alt='image' className='object-contain w-[430px] rounded-lg shadow-lg sm:w-[1200px] sm:h-[500px] sm:object-fill' />,
            <Image src={harmonicsB7} alt='image' className='object-contain w-[430px] rounded-lg shadow-lg sm:w-[1200px] sm:h-[500px] sm:object-fill' />,
            <Image src={harmonicsB8} alt='image' className='object-contain w-[430px] rounded-lg shadow-lg sm:w-[1200px] sm:h-[500px] sm:object-fill' />,
            <Image src={harmonicsB9} alt='image' className='object-contain w-[430px] rounded-lg shadow-lg sm:w-[1200px] sm:h-[500px] sm:object-fill' />,

            <Image src={harmonicsC1} alt='image' className='object-contain w-[430px] rounded-lg shadow-lg sm:w-[1200px] sm:h-[500px] sm:object-fill' />,
            <Image src={harmonicsC2} alt='image' className='object-contain w-[430px] rounded-lg shadow-lg sm:w-[1200px] sm:h-[500px] sm:object-fill' />,
            <Image src={harmonicsC3} alt='image' className='object-contain w-[430px] rounded-lg shadow-lg sm:w-[1200px] sm:h-[500px] sm:object-fill' />,
        ],
        contentTitle: [
            'Harmonics Landing Page Overview',
            'Login Feature',
            'Sign-Up Feature',
            'Customer Dashboard',
            'Product Feature',
            'Product Checkout Section',
            'Cart Feature',
            'Cart Checkout Section',
            'Customer Orders Feature',
            'Customer Profile Feature',
            'About Feature',
            'Manager Inventory Management',
            'Customer Notification Feature',
            'Manager Point of Sale for Walk-In Customers',
            'Manager Enlist Product in POS',
            'Manager Cart Section',
            'Manager Product Viewing Feature',
            'Manager Walk-In Order Management',
            'Manager Walk-In Orders Section',
            'Manager Online Orders Section',
            'Customer Proof of Payment Upload',
            'Manager Online Order Management',
            'Admin Dashboard',
            'Online Sales Analytics',
            'Walk-In Sales Analytics',
            'Top-Selling Online Products Analytics',
            'Order Status and Online Payment Method Analytics',
            'Preview Invoice Receipt',
            'Employee Account Management',
            'Customer Account Management',
        ],
        contentDescription: [
            'Explore our homepage, shop top-quality sports and music gear in the Products section, learn our story in About, and easily connect with us through the Contact page, featuring our email, phone, and nearby branch addresses.',
            'Users can log in to their account using their email and password, or continue with Google or Facebook.',
            'Users can create an account by providing their name, phone number, email, and address. Strong password rules are enforced for added security.',
            'After login, customers are taken to their personalized dashboard with access to exclusive online shopping features.',
            'Customers can view product names, prices, stock availability, and choose to buy immediately or add items to their cart.',
            'Customers proceed to checkout by reviewing their selected product, confirming quantity, and finalizing payment.',
            'Customers can view and manage all items they’ve added to their shopping cart.',
            'From the cart, customers can proceed to final checkout, review item summary, and complete their purchase.',
            'Customers can view a list of their past and current orders with status tracking.',
            'Customers can view and update their personal profile details such as name, email, and address.',
            'Learn more about Harmonics mission, values, and dedication to promoting health and creativity.',
            'Managers can monitor and manage product stock levels and inventory records in real time.',
            'Customers receive timely notifications on order status, promotions, and account activity.',
            'Managers can process sales for walk-in customers through a dedicated point-of-sale system.',
            'Managers can add or enlist products into the POS system for in-store transactions.',
            'Managers can view and manage the cart used during walk-in customer transactions.',
            'Managers can browse and review all available products in the system.',
            'Managers handle walk-in customer orders, including processing and fulfillment.',
            'This section lists and organizes all walk-in customer orders for easy management.',
            'Managers can access and review all online orders placed by customers.',
            'Customers can upload proof of payment to verify their transaction for manual review.',
            'Managers can oversee the entire online order process, from confirmation to delivery.',
            'Admins have centralized access to monitor users, system activities, and analytics.',
            'Provides sales data and trends for all online orders made through the system.',
            'Displays sales performance data from in-store or walk-in customer transactions.',
            'Analyzes which online products are the top sellers based on order history.',
            'Shows percentage breakdowns of order statuses and the most-used online payment methods.',
            'Allows customers or staff to preview detailed invoice receipts before or after payment.',
            'Admins can manage employee accounts, including creation, updates, and access control.',
            'Admins can manage all registered customer accounts and their activity within the system.'
        ]
    },
    {
        previewImage: [
            <Image src={flower1} alt='image' className='object-contain w-[430px] rounded-lg shadow-lg sm:w-[1200px] sm:h-[500px] sm:object-fill' />,
            <Image src={flower2} alt='image' className='object-contain w-[430px] rounded-lg shadow-lg sm:w-[1200px] sm:h-[500px] sm:object-fill' />,
            <Image src={flower3} alt='image' className='object-contain w-[430px] rounded-lg shadow-lg sm:w-[1200px] sm:h-[500px] sm:object-fill' />,
            <Image src={flower4} alt='image' className='object-contain w-[430px] rounded-lg shadow-lg sm:w-[1200px] sm:h-[500px] sm:object-fill' />,
            <Image src={flower5} alt='image' className='object-contain w-[430px] rounded-lg shadow-lg sm:w-[1200px] sm:h-[500px] sm:object-fill' />,
            <Image src={flower6} alt='image' className='object-contain w-[430px] rounded-lg shadow-lg sm:w-[1200px] sm:h-[500px] sm:object-fill' />,
            <Image src={flower7} alt='image' className='object-contain w-[430px] rounded-lg shadow-lg sm:w-[1200px] sm:h-[500px] sm:object-fill' />,
            <Image src={flower8} alt='image' className='object-contain w-[430px] rounded-lg shadow-lg sm:w-[1200px] sm:h-[500px] sm:object-fill' />,
            <Image src={flower9} alt='image' className='object-contain w-[430px] rounded-lg shadow-lg sm:w-[1200px] sm:h-[500px] sm:object-fill' />,
            <Image src={flower10} alt='image' className='object-contain w-[430px] rounded-lg shadow-lg sm:w-[1200px] sm:h-[500px] sm:object-fill' />,
            <Image src={flower11} alt='image' className='object-contain w-[430px] rounded-lg shadow-lg sm:w-[1200px] sm:h-[500px] sm:object-fill' />,
        ],
        contentTitle: [
            "Tungal's Flower Shop: Landing Page Overview",
            "Product Features",
            "Cart Features",
            "Customer Order Management",
            "Employee Profile Management",
            "Admin Dashboard",
            "Inventory Analytics",
            "Sales Management",
            "Inventory Management",
            "Employee Account Management",
            "Admin Profile Management"
        ],
        contentDescription: [
            "The landing page provides a secure login form for employees and administrators to access the POS system.",
            "Employees can view product details, including flower types, prices, and available stock to assist walk-in customers.",
            "Employees can manage the cart by adding selected products for walk-in customer orders and updating quantities.",
            "Employees handle and track all walk-in customer orders from entry to fulfillment, ensuring smooth transaction flow.",
            "Employees can view and manage their profile details, including name, role, and assigned tasks.",
            "The admin dashboard offers a centralized view of sales, inventory, and employee activities for better oversight.",
            "Analytics display real-time product movement, sales trends, and low-stock alerts for inventory planning.",
            "Tracks sales transactions handled by employees, including daily totals and order breakdowns.",
            "Admins and employees can monitor and update stock levels, add new flower items, and remove discontinued products.",
            "Admins manage all employee accounts, including creation, role assignment, and access permissions.",
            "Admins can update their own profile information and manage secure system settings."
        ]
    },
    {
        previewImage: [
            <Image src={expense2} alt='image' className='object-contain h-[500px] rounded-lg ' />,
            <Image src={expense3} alt='image' className='object-contain h-[500px] rounded-lg ' />,
            <Image src={expense4} alt='image' className='object-contain h-[500px] rounded-lg ' />,
            <Image src={expense5} alt='image' className='object-contain h-[500px] rounded-lg ' />,
            <Image src={expense6} alt='image' className='object-contain h-[500px] rounded-lg ' />,
            <Image src={expense7} alt='image' className='object-contain h-[500px] rounded-lg ' />,
            <Image src={expense8} alt='image' className='object-contain h-[500px] rounded-lg ' />,
            <Image src={expense9} alt='image' className='object-contain h-[500px] rounded-lg ' />,
            <Image src={expenseA1} alt='image' className='object-contain h-[500px] rounded-lg' />,
            <Image src={expenseA2} alt='image' className='object-contain h-[500px] rounded-lg' />,
            <Image src={expenseA3} alt='image' className='object-contain h-[500px] rounded-lg' />,
            <Image src={expenseA4} alt='image' className='object-contain h-[500px] rounded-lg' />,
            <Image src={expenseA5} alt='image' className='object-contain h-[500px] rounded-lg' />,
        ],
        contentTitle: [
            "Login Page",
            "Registration Page",
            "Dashboard",
            "Expense Categories",
            "Enlist Expenses",
            "Expense Analytics",
            "Profile Page",
            "Customize Profile",
            "Admin Login Page",
            "Admin Registration Page",
            "Admin Dashboard",
            "User Management",
            "View User Expense History"
        ],
        contentDescription: [
            "Accessible only through the mobile app, this secure login page allows registered users to access their personal dashboard.",
            "Only users who have downloaded the mobile app can register and begin managing their personal expenses.",
            "Displays a personalized dashboard where users can track total expenses, view summaries, and quick stats.",
            "Allows users to create and manage expense categories for better financial organization and tracking.",
            "Enables users to log their daily expenses, select categories, add notes, and track their spending over time.",
            "Generates visual reports like charts and graphs to help users analyze and understand their spending habits.",
            "Shows user profile details including name, email address, and account creation date.",
            "Lets users edit their profile information, such as updating name, password, or profile picture.",
            "Admins can securely log in to access the administrative panel of the system.",
            "Admins can register other admin accounts with proper credentials and permissions.",
            "Admin dashboard provides insights into user activity, system logs, and overall app usage.",
            "Admins have full control over all user accounts, including viewing, editing, or deactivating them.",
            "Admins can view the detailed expense history of any registered user in the system."
        ],

    },
    {
        previewImage: [
            <Image src={study1} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg ' />,
            <Image src={study2} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg ' />,
            <Image src={study3} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg ' />,
            <Image src={study4} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg ' />,
            <Image src={study5} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg ' />,
            <Image src={study6} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg ' />,
            <Image src={study7} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg ' />,
            <Image src={study8} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg ' />,
            <Image src={study9} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg' />,
            <Image src={studyA1} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg' />,
            <Image src={studyA2} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg' />,
            <Image src={studyA3} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg' />,
            <Image src={studyA4} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg' />,
            <Image src={studyA5} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg' />,
            <Image src={studyA6} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg' />,
            <Image src={studyA7} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg' />,
            <Image src={studyA8} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg' />,
            <Image src={studyA9} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg' />,
        ],
        contentTitle: [
            "Login Page",
            "Dashboard",
            "Meeting Room Feature",
            "Join Meeting Room",
            "Meeting Room Dashboard",
            "Meeting Room ChatBox",
            "Studdy Buddy Tutor",
            "Study Timer",
            "FlashCard Question",
            "FlashCard Answer",
            "Enlist New FlashCard",
            "Dialog Message",
            "Courses",
            "Direct App Access",
            "To-Do List Feature",
            "Enlist New Task",
            "File Manager",
            "Notification"
        ],
        contentDescription: [
            "Users can log in quickly using email, Google, or Facebook accounts to access the app securely.",
            "The dashboard displays all main services including meeting rooms, flashcards, timer, courses, and more.",
            "Allows users to create and host study sessions by generating a unique meeting room code.",
            "Enables users to join a study room by entering an existing code shared by other participants.",
            "Shows an active session's details including participants, duration, and access to tools like chat.",
            "A real-time chatbox feature inside the meeting room for sharing study notes and communication.",
            "Connects students with a smart study buddy assistant that offers guidance and motivational support.",
            "Helps students stay focused by setting countdowns and breaks to structure study sessions efficiently.",
            "Presents flashcard questions created by users for effective recall practice and spaced repetition.",
            "Displays the answers to flashcard questions after interaction to reinforce learning and memory.",
            "Allows users to create and save new flashcards with questions and answers for future review.",
            "Shows system-generated dialog messages that guide or remind the user during their study journey.",
            "Displays a list of available study courses that users can explore and follow within the app.",
            "Enables quick access to key app features like meeting room and timer without going through menus.",
            "A personal task manager that helps students organize study goals and prioritize daily activities.",
            "Lets users add new tasks with deadlines or reminders to enhance productivity and planning.",
            "Organizes uploaded or shared files in a single place, making study materials easily accessible.",
            "Notifies users about upcoming sessions, reminders, and app activity to keep them on track."
        ],
    },
    {
        previewImage: [
            <Image src={kargadala1} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg ' />,
            <Image src={kargadala2} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg ' />,
            <Image src={kargadala3} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg ' />,
            <Image src={kargadala4} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg ' />,
            <Image src={kargadala5} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg ' />,
            <Image src={kargadala6} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg ' />,
            <Image src={kargadala7} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg ' />,
            <Image src={kargadala8} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg ' />,
            <Image src={kargadala9} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg' />,
            <Image src={kargadalaA1} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg' />,
            <Image src={kargadalaA2} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg' />,
            <Image src={kargadalaA3} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg' />,
            <Image src={kargadalaA4} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg' />,
            <Image src={kargadalaA5} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg' />,
            <Image src={kargadalaA6} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg' />,
            <Image src={kargadalaA7} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg' />,
            <Image src={kargadalaA8} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg' />,
            <Image src={kargadalaA9} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg' />,
            <Image src={kargadalaB1} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg' />,
            <Image src={kargadalaB2} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg' />,
            <Image src={kargadalaB3} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg' />,
            <Image src={kargadalaB4} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg' />,
        ],
        contentTitle: [
            "Landing Page",
            "Registration Page",
            "Login Page",
            "Forgot Password",
            "Dashboard",
            "Order Food",
            "View Selected Food Order",
            "Book Rides",
            "Pay Bills",
            "Necessary Bills Information",
            "Send Kargadala Credits",
            "PasaFare Proof of Payment",
            "Send Packages",
            "Vouchers",
            "View Selected Voucher Information",
            "Chatbot Assistance",
            "App Navigation",
            "User Profile",
            "User Profile Information",
            'Customize User Profile Avatar',
            'Reset Password',
            'OTP Verification'
        ],
        contentDescription: [
            "The welcome screen of the app, showcasing core features and quick navigation to sign up or log in.",
            "Allows new users to register using personal details or social login options to access all app services.",
            "Existing users can securely log in using email, Google, or Facebook credentials.",
            "Enables users to reset forgotten passwords by verifying their email or registered number.",
            "Main hub displaying all available services like ride booking, food orders, payments, and more.",
            "Browse and order meals from partner restaurants with real-time menu and price display.",
            "Displays a summary of the user's selected food items before finalizing the order.",
            "Book motor rides by setting pickup and destination points with estimated fare and driver details.",
            "Allows users to pay utility bills such as electricity, water, or mobile loads directly in-app.",
            "Provides information required to pay various bills like account numbers or reference codes.",
            "Send Kargadala app credits (PasaFare) instantly to other users for purchases or services.",
            "Displays uploaded proof of payment for money transfers or PasaFare transactions.",
            "Arrange for pickup and delivery of packages with sender/receiver details and tracking support.",
            "Access promotional vouchers and discounts that can be applied to services or products.",
            "Shows full details about a selected voucher, including terms, expiry, and usage steps.",
            "Provides automated customer support via chatbot for help navigating or using app features.",
            "Interactive navigation bar for users to quickly access main sections like orders, rides, and wallet.",
            "View and manage basic user profile information including name, contact, and activity logs.",
            "Displays specific user details such as email, address, account balance, and recent transactions.",
            "Allows users to customize their avatar or profile image to personalize their experience.",
            "Lets users update their account password securely from the profile settings.",
            "Verifies user identity through a one-time password (OTP) during critical actions like login or password reset."
        ],
    },
    {
        previewImage: [
            <Image src={flash1} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg ' />,
            <Image src={flash2} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg ' />,
            <Image src={flash3} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg ' />,
            <Image src={flash4} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg ' />,
            <Image src={flash5} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg ' />,
            <Image src={flash6} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg ' />,
            <Image src={flash7} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg ' />,
            <Image src={flash8} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg ' />,
            <Image src={flash9} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg ' />,
            <Image src={flashA1} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg ' />,
        ],
        contentTitle: [
            "Landing Page",
            "Organize Recent Photo",
            "Set Alarm",
            "Photo Swiper",
            "Private Photo Vault / Storage",
            "Organize Private Photos",
            "User Profile Feature",
            "Subscription Plans",
            "Promote or Share Flashback",
            "Flashback Updates"
        ],
        contentDescription: [
            "Displays recently taken and past-year photos with camera access, photo organization, and navigation options.",
            "Helps users sort, group, and label their most recent photos for easier access and browsing.",
            "Allows users to set alarms or reminders tied to specific memories or photo events.",
            "Enables users to swipe through photos in a smooth, interactive carousel format.",
            "Provides a secure vault to store private photos, accessible only through authentication.",
            "Organize and manage private or hidden photos within a dedicated and secure space.",
            "View and edit personal details including name, email, profile picture, and settings.",
            "Displays available subscription plans with their benefits for unlocking premium features.",
            "Allows users to share memorable photo flashbacks on social media or with friends.",
            "Provides updates or highlights of past memories, showing on specific dates or anniversaries."
        ],
    },
    {
        previewImage: [
            <Image src={komyut1} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg ' />,
            <Image src={komyut2} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg ' />,
            <Image src={komyut3} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg ' />,
            <Image src={komyut4} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg ' />,
            <Image src={komyut5} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg ' />,
            <Image src={komyut6} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg ' />,
            <Image src={komyut7} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg ' />,
            <Image src={komyut8} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg ' />,
            <Image src={komyut9} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg ' />,
            <Image src={komyutA1} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg ' />,
            <Image src={komyutA2} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg ' />,
            <Image src={komyutA3} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg ' />,
            <Image src={komyutA4} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg ' />,
            <Image src={komyutA5} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg ' />,
            <Image src={komyutA6} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg ' />,
            <Image src={komyutA7} alt='image' className='object-contain w-[400px] h-[500px] rounded-lg ' />,
        ],
        contentTitle: [
            'Landing Page',
            'Login Page',
            'Registration Page',
            'Dashboard',
            'Navigation Menu',
            'Komyut Map View',
            'Davao Popular Landmarks',
            'Report Road Issue',
            'View Road Report',
            'Add Road Report Issue',
            'Emergency Hotlines',
            'Subscription Plan',
            'Gcash Online Payment',
            'Referral Program',
            'Points Redemption',
            'User Profile'
        ],
        contentDescription: [
            "Presents the Komyut app's tagline and purpose, introducing users to the features that help them navigate around Davao City with ease.",
            "Provides a secure and user-friendly login page where users can access their accounts using email or social credentials.",
            "Allows new users to create an account by entering basic personal information to gain full access to the Komyut app services.",
            "Acts as the central hub displaying essential features such as map view, reports, subscriptions, and user settings.",
            "A sidebar or bottom navigation menu that helps users quickly access various features like landmarks, reports, and profile.",
            "Displays an interactive map centered on Davao City with routes, landmarks, and real-time travel updates for commuters.",
            "Highlights key and popular landmarks in Davao City to assist users in recognizing locations during commute planning.",
            "Lets users report road-related issues like traffic, accidents, or blockages to inform others and help improve road safety.",
            "Shows a list or map of road issues reported by other users, allowing for real-time awareness of potential travel disruptions.",
            "Provides a form for users to add new road report issues by entering details such as type, location, and a photo (optional).",
            "Offers quick access to important emergency hotlines such as police, fire, and medical services for user safety and preparedness.",
            "Displays available subscription options for users to unlock premium features like offline maps and unlimited route searches.",
            "Allows users to securely complete subscription payments using Gcash, the supported digital wallet for in-app transactions.",
            "Encourages users to invite friends by sharing referral codes to earn rewards and expand the Komyut app user base.",
            "Lets users redeem earned points from referrals or app engagement for discounts, features, or other benefits.",
            "Shows the user's personal information, travel activity, points, and allows updates to profile details or settings."
        ],
    },
];

export default function ViewProject() {
    const searchParams = useSearchParams();
    const idParam = searchParams.get('id');
    const id = parseInt(idParam);
    const validProject = !isNaN(id) && id >= 0 && id < projects.length;
    const currentProject = validProject ? projects[id] : null;

    const [current, setCurrent] = useState(0);
    const [carouselApi, setCarouselApi] = useState(0);

    useEffect(() => {
        if (!carouselApi || typeof carouselApi.on !== 'function') return;

        const handler = () => setCurrent(carouselApi.selectedScrollSnap());
        carouselApi.on('select', handler);

        return () => {
            if (typeof carouselApi.off === 'function') {
                carouselApi.off('select', handler);
            }
        };
    }, [carouselApi]);


    if (!currentProject || !currentProject.previewImage) {
        return <div className="text-center text-red-500 mt-10">Project not found or no preview images available.</div>;
    }

    const mobileLayout = [2, 3, 4, 5, 6];

    if (mobileLayout.includes(id)) {
        return (
            <div className="container mx-auto h-full pb-[2rem]">
                {currentProject.previewImage.map((image, index) => (
                    <motion.div
                        className="flex flex-col justify-center items-center gap-[2.5rem] h-screen pb-[4rem] mb-[4rem] sm:flex-row sm:mb-0"
                        key={index}
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.2 }} // trigger when 20% of item is visible
                    >
                        <div className='flex justify-center items-center'>
                            {image}
                        </div>

                        <div className="mx-[2rem] sm:w-[500px]">
                            <h2 className='text-2xl font-bold'>
                                {currentProject.contentTitle[index] || "Untitled"}
                            </h2>
                            <p className='text-base text-neutral-400 text-justify mt-2'>
                                {currentProject.contentDescription[index] || "N/A"}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        )
    }

    return (
        <div className='container mx-auto h-full pt-8 pb-16 px-4 sm:px-8'>
            <div className="flex flex-col justify-center h-auto sm:gap-12">
                <Carousel
                    className="w-full max-w-[430px] mx-auto overflow-x-hidden overflow-y-hidden sm:max-w-[1100px] sm:overflow-visible"
                    setApi={setCarouselApi}
                >
                    <CarouselContent className='h-[270px] sm:h-auto'>
                        {currentProject.previewImage.map((image, index) => (
                            <CarouselItem
                                key={index}
                                className="w-full h-[300px] sm:w-[1100px] flex justify-center items-center sm:h-[500px]"
                            >
                                {image}
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

                <div className="px-4 sm:px-24">
                    <h2 className='text-xl sm:text-2xl font-bold'>
                        {currentProject.contentTitle?.[current] || "Untitled"}
                    </h2>
                    <p className='text-sm sm:text-base text-neutral-400 text-justify mt-2'>
                        {currentProject.contentDescription?.[current] || "N/A"}
                    </p>
                </div>
            </div>
        </div>

    );
}
