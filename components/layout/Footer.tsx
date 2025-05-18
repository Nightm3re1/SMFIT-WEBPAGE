"use client";

import Link from 'next/link';
import Image from 'next/image';
import { NAV_LINKS, SOCIAL_LINKS, CONTACT_INFO } from '@/lib/constants';
import { Instagram, Facebook, Send, Mail, Phone, MapPin } from 'lucide-react';
import TikTokIcon from '@/components/ui/TikTokIcon';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations();
  
  return (
    <footer className="bg-accent-100 dark:bg-accent-900 pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <div className="space-y-4 flex flex-col justify-start">
            <Link href="/" className="inline-block">
              <div className="relative h-20 w-[220px] mb-1">
                <Image 
                  src="https://uyy0kjad2n.ufs.sh/f/qhW01JguYVfw7IOvbpN0J62eowUxLNWCEqFd8DsRkfZznI4u" 
                  alt="SMfit Logo" 
                  fill
                  sizes="220px"
                  className="object-contain object-left"
                  style={{ backgroundColor: 'transparent' }}
                />
              </div>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4 mt-4">
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary-600 transition">
                <Instagram size={20} />
              </a>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-primary-600 transition">
                <Facebook size={20} />
              </a>
              <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-muted-foreground hover:text-primary-600 transition">
                <TikTokIcon size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="text-sm text-muted-foreground hover:text-primary-600 transition">
                    {t(`navigation.${link.translationKey}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary-600 shrink-0" />
                <span className="text-sm text-muted-foreground hover:text-primary-600 transition">
                  {CONTACT_INFO.email}
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary-600 shrink-0" />
                <span className="text-sm text-muted-foreground hover:text-primary-600 transition">
                  {CONTACT_INFO.phone}
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-600 shrink-0" />
                <a 
                  href="https://www.google.com/maps/place/18+Gym+Auchan+Tudor-Targu+Mures/@46.5309835,24.5979599,17z/data=!3m1!4b1!4m6!3m5!1s0x474bb7b43baa946d:0xd452015a86f12cd7!8m2!3d46.5309835!4d24.5979599!16s%2Fg%2F11y3kdp8qy?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary-600 transition"
                >
                  {CONTACT_INFO.address}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex justify-center">
          <p className="text-xs text-muted-foreground">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;