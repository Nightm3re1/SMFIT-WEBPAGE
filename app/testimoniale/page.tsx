"use client";

import { testimonials } from '@/data/testimonials';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/shared/AnimatedSection';

export default function TestimonialePage() {
  return (
    <div className="mt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-accent-100/50 dark:bg-accent-900/20 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-primary-600">Testimoniale</span> Clienți
            </h1>
            <p className="text-lg text-muted-foreground">
              Citește experiențele reale ale clienților care și-au transformat corpul și viața cu ajutorul programelor SMfit.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection 
                key={index} 
                delay={index * 0.1}
                className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col"
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="flex space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-primary-500 fill-primary-500" />
                    ))}
                  </div>
                  
                  <p className="text-foreground mb-6 italic text-sm flex-grow">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center mt-auto">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.photoUrl}
                        alt={testimonial.name}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 md:py-24 bg-primary-100/50 dark:bg-primary-900/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Povești de <span className="text-primary-600">Succes</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Transformări reale ale clienților care au urmat programele SMfit și și-au schimbat viața.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-card border border-primary-300 dark:border-primary-400/30 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:border-primary-400 dark:hover:border-primary-400/50 hover:transform hover:scale-105 hover:-translate-y-1">
              <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                <div className="relative h-64 md:h-full w-full">
                  <Image
                    src="https://uyy0kjad2n.ufs.sh/f/qhW01JguYVfwhEfhGSkMYUJiv0l5kDVXSaf3eBAy1wz6NTgF"
                    alt="Transformare Mădălina"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover w-full h-full"
                    style={{objectPosition: "center"}}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Mădălina I.</h3>
                  <p className="text-sm text-muted-foreground mb-4">Antrenamente Personale și Nutriție Personalizată - 1 lună</p>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Greutate pierdută:</span>
                      <span className="font-medium">3 kg</span>
                    </div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Piept redus:</span>
                      <span className="font-medium">3 cm</span>
                    </div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Talie redusă:</span>
                      <span className="font-medium">4 cm</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Șold redus:</span>
                      <span className="font-medium">5 cm</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm italic">
                    "Disciplină, seriozitate și încredere îmbinate cu blândețe și calm – așa aș descrie sesiunile de antrenament ale Sabinei. Îți mulțumesc din suflet, Sabina! ❤️"
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-primary-300 dark:border-primary-400/30 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:border-primary-400 dark:hover:border-primary-400/50 hover:transform hover:scale-105 hover:-translate-y-1">
              <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                <div className="relative h-64 md:h-full w-full">
                  <Image
                    src="https://uyy0kjad2n.ufs.sh/f/qhW01JguYVfwgaYpTuQZf18a5jMTEnP6XNRBJGA4CxwvbQDF"
                    alt="Transformare Carina"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover w-full h-full"
                    style={{objectPosition: "center"}}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Carina C.</h3>
                  <p className="text-sm text-muted-foreground mb-4">Antrenamente Online și Nutriție Personalizată - 8 săptămâni</p>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Greutate pierdută:</span>
                      <span className="font-medium">6 kg</span>
                    </div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Piept redus:</span>
                      <span className="font-medium">7 cm</span>
                    </div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Talie redusă:</span>
                      <span className="font-medium">9 cm</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Șold redus:</span>
                      <span className="font-medium">12 cm</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm italic">
                    "Alegerea serviciilor Sabinei s-a dovedit a fi foarte utilă: susținerea ei psihică și programele de antrenament personalizate au adus progres zilnic. Planul alimentar echilibrat face stilul de viață sănătos plăcut și sustenabil."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Vrei să fii următoarea poveste de succes?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Programează o consultație gratuită pentru a discuta despre obiectivele tale și pentru a afla
              cum te poate ajuta SMfit să le atingi.
            </p>
            <Button asChild size="lg" className="bg-primary-500 hover:bg-primary-600 text-white">
              <Link href="/contact">
                Rezervă-ți prima sesiune gratuită
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}