import Image from 'next/image';
import { SERVICES } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Servicii | SMfit',
  description: 'Descoperă serviciile personalizate de fitness și nutriție oferite de SMfit pentru a-ți atinge obiectivele de sănătate și formă fizică.',
  openGraph: {
    title: 'Servicii | SMfit',
    description: 'Descoperă serviciile personalizate de fitness și nutriție oferite de SMfit.',
    url: 'https://smfit.ro/servicii',
  },
};

export default function ServiciiPage() {
  return (
    <div className="mt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-accent-100/50 dark:bg-accent-900/20 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Servicii <span className="text-primary-600">Personalizate</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Programele SMfit sunt create special pentru a se adapta nevoilor, obiectivelor și stilului tău de viață.
              Explorează serviciile noastre și alege soluția perfectă pentru tine.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-24">
            {SERVICES.map((service, index) => (
              <div 
                key={service.id}
                id={service.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className={index % 2 === 0 ? "order-2 lg:order-1" : "order-2"}>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    {service.title}
                  </h2>
                  
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        {service.id === 'program-transformare' ? (
                          <>
                            <span className="text-primary-600 mr-1">✓</span>
                            <span>{feature.substring(2)}</span>
                          </>
                        ) : (
                          <>
                            <Check className="h-5 w-5 text-primary-600 mr-3 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <div className="mb-8">
                    <div className="text-sm text-muted-foreground mb-2">Preț</div>
                    <div className="text-2xl font-bold text-primary-600">{service.price}</div>
                  </div>
                  
                  <Button asChild size="lg" className="bg-primary-500 hover:bg-primary-600 text-white">
                    <Link href="/contact">
                      Fă primul pas spre transformare
                    </Link>
                  </Button>
                </div>
                
                <div className={index % 2 === 0 ? "order-1 lg:order-2" : "order-1"}>
                  <div className="relative h-[350px] md:h-[450px] rounded-lg overflow-hidden">
                    <Image
                      src={service.id === 'antrenament-personal' 
                        ? "https://uyy0kjad2n.ufs.sh/f/qhW01JguYVfwH5T8uVj83wx7T1NoIPQpdnG4mgziA5lyZcq0"
                        : service.id === 'nutritie-personalizata' 
                          ? "https://uyy0kjad2n.ufs.sh/f/qhW01JguYVfwukfgny34gpbFeqNYrtlznvSTDQ1aPcXM8wZh"
                          : service.id === 'antrenament-online'
                            ? "https://uyy0kjad2n.ufs.sh/f/qhW01JguYVfw4cGeVEhDmAkf2QUN3i40Mv5OXy6ejYWgZ7H9"
                           : "https://uyy0kjad2n.ufs.sh/f/qhW01JguYVfwjQaD4uvTYS0eicJdNFm5D9VuqRUE2pCy71ko"}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary-100/50 dark:bg-primary-900/10 border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nu ești sigur ce ți se potrivește?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Programează o consultație gratuită pentru a discuta despre obiectivele tale și pentru a afla
              care dintre serviciile noastre este cel mai bine adaptat nevoilor tale.
            </p>
            <Button asChild size="lg" className="bg-primary-500 hover:bg-primary-600 text-white">
              <Link href="/contact">
                Fă primul pas spre transformare
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}