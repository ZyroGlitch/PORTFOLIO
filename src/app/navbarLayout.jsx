'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaBars, FaXmark } from 'react-icons/fa6';

/* ---------- Custom hook to get viewport width ---------- */
function useViewportWidth() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return width;
}

const links = [
  { href: '/', label: 'Home' },
  { href: '/skills', label: 'Skills' },
  { href: '/projects', label: 'Projects' },
  { href: '/certifications', label: 'Certifications' },
];

/* ------------------ NavBar Component ------------------- */
export default function NavBarLayout() {
  const pathname = usePathname();
  const width = useViewportWidth();
  const [isOpen, setIsOpen] = useState(false);

  const isDesktop = width >= 640;
  const showNav = isDesktop || isOpen;
  const showIndicator = isDesktop;

  const toggleMenu = () => setIsOpen(prev => !prev);
  const handleLinkClick = () => {
    if (!isDesktop) setIsOpen(false);
  };

  return (
    <div className="bg-[#211d3e] sticky top-0 z-10 w-full sm:bg-[#1B1833] ">
      {/* Hamburger icon (mobile only) */}
      <div className="sm:hidden flex items-center p-4">
        <button
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          className="text-white p-2 rounded-full shadow-xl hover:bg-[#4c4967]"
        >
          {
            !isOpen ? (
              <FaBars className="text-2xl" />
            ) : (
              <FaXmark className="text-2xl" />
            )
          }

        </button>
      </div>

      {/* Navigation menu (in document flow, not absolute) */}
      {showNav && (
        <nav
          className={`flex flex-col gap-4 sm:flex-row w-full px-4 pb-6 sm:py-4 sm:justify-center sm:items-center sm:gap-[5rem]`}
        >
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <motion.div key={href} className="relative" whileHover="hover">
                <Link
                  href={href}
                  onClick={handleLinkClick}
                  className={`text-xl transition duration-300 hover:scale-110 ${isActive
                    ? 'text-[#FE7743]'
                    : 'text-neutral-400 hover:text-white'
                    }`}
                >
                  {label}
                </Link>

                {/* Active underline (desktop only) */}
                {showIndicator && (
                  <motion.div
                    className="absolute bottom-[-10px] left-0 h-[2px] w-full bg-[#FE7743]"
                    initial={{ scaleX: isActive ? 1 : 0 }}
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{ transformOrigin: 'left' }}
                  />
                )}
              </motion.div>
            );
          })}
        </nav>
      )}
    </div>
  );
}
