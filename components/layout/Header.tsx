"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/lib/constants';
import { Menu, X, Globe } from 'lucide-react';
import MobileNav from './MobileNav';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useRouter, useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const t = useTranslations();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Event listener for closing the mobile menu
    const closeMobileMenu = () => setIsOpen(false);
    document.addEventListener('close-mobile-menu', closeMobileMenu);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('close-mobile-menu', closeMobileMenu);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [pathname]);

  // Toggle body scroll when mobile menu is open/closed
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Check if the current path matches or starts with the nav link path
  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/' || pathname === '/en' || pathname === '/ro';
    }
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <header className={cn(
      'fixed top-0 w-full z-50 transition-all duration-300 bg-white py-2',
      scrolled ? 'shadow-sm' : ''
    )}>
      <div className="container mx-auto px-0 md:px-2 flex items-center justify-between">
        <Link href="/" className="flex items-center z-50 ml-0 mr-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-20 w-[220px] pl-0"
          >
            <Image 
              src="https://uyy0kjad2n.ufs.sh/f/qhW01JguYVfw7IOvbpN0J62eowUxLNWCEqFd8DsRkfZznI4u" 
              alt="SMfit Logo" 
              fill
              sizes="(max-width: 768px) 220px, 220px"
              className="object-contain object-left"
              style={{ backgroundColor: 'transparent' }}
              priority
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={cn(
                    'text-base font-medium transition-all duration-300 font-heading',
                    isActive(link.path) 
                      ? 'text-primary-300 border-b-2 border-primary-400' 
                      : 'text-foreground/80 hover:text-primary-300'
                  )}
                >
                  {t(`navigation.${link.translationKey}`)}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-4">
            <LocaleSwitcher />
            <Button asChild size="sm" className="bg-primary-500 hover:bg-primary-600 text-white min-w-[140px]">
              <Link href="/contact">
                {t('navigation.contactButton')}
              </Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <LocaleSwitcher />
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="z-50 focus:outline-none p-2"
            aria-label={isOpen ? 'Închide meniul' : 'Deschide meniul'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && <MobileNav links={NAV_LINKS} />}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;