"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { fadeIn, staggerContainer } from '@/lib/animations';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const HeroSection = () => {
  const t = useTranslations();

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="pt-28 pb-16 md:py-32 overflow-hidden relative"
    >
      <div className="hero-gradient absolute inset-0 opacity-20 z-0" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            variants={fadeIn('right', 0.2)}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              {t('hero.title')}
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-primary-500 hover:bg-primary-600 text-white">
                <Link href="/servicii">
                  {t('hero.discoverServices')}
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">
                  {t('hero.startNow')}
                </Link>
              </Button>
            </div>
            
            <div className="flex gap-8 pt-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold">100+</span>
                <span className="text-sm text-muted-foreground">{t('hero.happyClients')}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold">2+</span>
                <span className="text-sm text-muted-foreground">{t('hero.yearsExperience')}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold">100%</span>
                <span className="text-sm text-muted-foreground">{t('hero.satisfaction')}</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            variants={fadeIn('left', 0.4)}
            className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden"
          >
            <Image
              src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="Antrenament personalizat SMfit"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-lg"
              priority
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;