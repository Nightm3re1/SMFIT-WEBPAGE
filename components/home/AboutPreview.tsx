"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/shared/AnimatedSection';

const AboutPreview = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="right" className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Despre <span className="text-primary-600">Sabina Meruță</span>
            </h2>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Salut! Sunt Sabina Meruță, antrenor personal certificat internațional (Level 4 și Level 2) cu peste 3 ani de experiență în transformarea corpurilor și vieților clienților mei.
            </p>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Cred că fiecare persoană merită o abordare unică, personalizată și construită pe principii solide de antrenament și nutriție, adaptată continuu pentru a obține cele mai bune rezultate. Scopul meu este să te susțin în drumul tău către o versiune mai sănătoasă, mai puternică și mai încrezătoare a ta.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-accent-100 dark:bg-accent-900/50 p-4 rounded-lg">
                <div className="font-bold text-xl mb-1">3+</div>
                <div className="text-sm text-muted-foreground">Certificări Internaționale</div>
              </div>
              <div className="bg-accent-100 dark:bg-accent-900/50 p-4 rounded-lg">
                <div className="font-bold text-xl mb-1">2+</div>
                <div className="text-sm text-muted-foreground">Ani de Experiență</div>
              </div>
              <div className="bg-accent-100 dark:bg-accent-900/50 p-4 rounded-lg">
                <div className="font-bold text-xl mb-1">100+</div>
                <div className="text-sm text-muted-foreground">Clienți Transformați</div>
              </div>
              <div className="bg-accent-100 dark:bg-accent-900/50 p-4 rounded-lg">
                <div className="font-bold text-xl mb-1">1000+</div>
                <div className="text-sm text-muted-foreground">Antrenamente Efectuate</div>
              </div>
            </div>
            
            <Button asChild className="group">
              <Link href="/despre-mine" className="flex items-center">
                Află mai multe despre mine
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </AnimatedSection>
          
          <AnimatedSection direction="left" className="order-1 lg:order-2">
            <div className="relative h-auto flex justify-center rounded-lg overflow-hidden">
              <img
                src="https://uyy0kjad2n.ufs.sh/f/qhW01JguYVfwlpGEGOr0U4wJzZO5AosvteNcyrn6P37uxqjM"
                alt="Ștefan Mircea - Antrenor Personal"
                className="rounded-lg max-w-full h-auto max-h-[600px] object-contain"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;