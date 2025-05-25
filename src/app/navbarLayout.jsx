'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const links = [
    { href: '/', label: 'Home' },
    { href: '/skills', label: 'Skills' },
    { href: '/projects', label: 'Projects' },
    { href: '/certifications', label: 'Certifications' },
];

export default function NavBarLayout() {
    const pathname = usePathname(); // ← get current route

    return (
        <nav className="flex justify-center items-center gap-[5rem] py-4">
            {links.map(({ href, label }) => {
                const isActive = pathname === href;

                return (
                    <motion.div
                        key={href}
                        className="relative"
                        whileHover="hover"
                    >
                        <Link
                            href={href}
                            className={`text-xl transition duration-300 hover:scale-110 ${isActive
                                ? 'text-white'
                                : 'text-neutral-400 hover:text-white'
                                }`}
                        >
                            {label}
                        </Link>

                        {/* underline shows when active OR hovered */}
                        <motion.div
                            className="absolute bottom-[-10px] left-0 h-[2px] w-full bg-[#FE7743]"
                            initial={{ scaleX: isActive ? 1 : 0 }}
                            animate={{ scaleX: isActive ? 1 : 0 }}
                            variants={{ hover: { scaleX: 1 } }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            style={{ transformOrigin: 'left' }}
                        />
                    </motion.div>
                );
            })}
        </nav>
    );
}
