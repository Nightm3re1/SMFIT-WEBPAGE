import { useTranslations } from 'next-intl';
import HeroSection from '@/components/home/HeroSection';
import ServicesOverview from '@/components/home/ServicesOverview';
import AboutPreview from '@/components/home/AboutPreview';
import TestimonialsSlider from '@/components/home/TestimonialsSlider';
import FaqSection from '@/components/home/FaqSection';
import CtaSection from '@/components/home/CtaSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <AboutPreview />
      <TestimonialsSlider />
      <FaqSection />
      <CtaSection />
    </>
  );
}