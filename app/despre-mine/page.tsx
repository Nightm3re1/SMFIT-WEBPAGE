import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import PhotoCarousel from '@/components/shared/PhotoCarousel';

export const metadata: Metadata = {
  title: 'Despre Mine | SMfit',
  description: 'Află mai multe despre Ștefan Mircea, fondatorul SMfit, expertiza și filozofia sa despre fitness și nutriție personalizată.',
  openGraph: {
    title: 'Despre Mine | SMfit',
    description: 'Află mai multe despre Ștefan Mircea, fondatorul SMfit, expertiza și filozofia sa despre fitness și nutriție.',
    url: 'https://smfit.ro/despre-mine',
  },
};

export default function DespreMine() {
  return (
    <div className="mt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-accent-100/50 dark:bg-accent-900/20 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Despre <span className="text-primary-600">Mine</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Pasiunea mea este să ajut oamenii să își atingă potențialul maxim prin fitness și nutriție personalizată.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">Cine Sunt Eu</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Salut!
                Sunt Sabina Meruță, fondatoarea SMfit și antrenoare personală certificată internațional, cu peste 2 ani de experiență în fitness și nutriție.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Pasiunea mea pentru mișcare și artă s-a conturat încă din adolescență, când am obținut diploma de Coregraf și Dansator Profesionist, iar mai târziu am descoperit efectele transformatoare ale antrenamentelor în sala de sport. M-a uimit cum exercițiile regulate, combinate cu o alimentație corectă, pot revitaliza corpul și pot crește semnificativ nivelul de energie.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                În prezent, sunt studentă la Facultatea de Farmacie – specializarea Nutriție și Dietetică, din cadrul Universității de Medicină, Farmacie, Științe și Tehnologie „George Emil Palade" din Târgu Mureș, și dețin numeroase cursuri internaționale acreditate în fitness și alimentație sănătoasă.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed pt-4">
                Cu fiecare program personalizat, combin experiența practică, știința nutriției și creativitatea coregrafică pentru a te ajuta să-ți atingi obiectivele!
              </p>
            </div>
            <div className="relative h-auto flex justify-center rounded-lg overflow-hidden">
              <img
                src="https://zbm5woa3iy.ufs.sh/f/1fxqa6mYldrz1fnyBrRYldrzIivN7xYcX6jQtJ8ybZFBS9Hn"
                alt="Ștefan Mircea - Fondator SMfit"
                className="rounded-lg max-w-full h-auto max-h-[600px] object-contain"
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-bold mb-6 text-center">Filosofia Mea</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Filosofia mea se bazează pe câteva principii fundamentale:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card border border-primary-200 dark:border-primary-900/30 p-6 rounded-lg shadow-md transition-all duration-300 hover:transform hover:scale-105 hover:border-primary-400 dark:hover:border-primary-700 hover:shadow-lg">
                <h3 className="text-xl font-bold mb-2">Personalizare</h3>
                <p className="text-muted-foreground">
                  Fiecare persoană este unică, cu nevoi, limitări și obiective diferite. De aceea, toate programele mele sunt 
                  personalizate 100% pentru fiecare client în parte.
                </p>
              </div>
              <div className="bg-card border border-primary-200 dark:border-primary-900/30 p-6 rounded-lg shadow-md transition-all duration-300 hover:transform hover:scale-105 hover:border-primary-400 dark:hover:border-primary-700 hover:shadow-lg">
                <h3 className="text-xl font-bold mb-2">Abordare Științifică</h3>
                <p className="text-muted-foreground">
                  Mă bazez pe cercetări științifice actuale și metode dovedite, nu pe tendințe trecătoare sau "soluții miraculoase". 
                  Eficiența și siguranța sunt prioritare.
                </p>
              </div>
              <div className="bg-card border border-primary-200 dark:border-primary-900/30 p-6 rounded-lg shadow-md transition-all duration-300 hover:transform hover:scale-105 hover:border-primary-400 dark:hover:border-primary-700 hover:shadow-lg">
                <h3 className="text-xl font-bold mb-2">Sustenabilitate</h3>
                <p className="text-muted-foreground">
                  Cred în schimbări sustenabile, nu în soluții temporare. Scopul meu este să te ajut să dezvolți obiceiuri sănătoase 
                  pe termen lung, nu doar să obții rezultate rapide care nu durează.
                </p>
              </div>
              <div className="bg-card border border-primary-200 dark:border-primary-900/30 p-6 rounded-lg shadow-md transition-all duration-300 hover:transform hover:scale-105 hover:border-primary-400 dark:hover:border-primary-700 hover:shadow-lg">
                <h3 className="text-xl font-bold mb-2">Educație</h3>
                <p className="text-muted-foreground">
                  Dincolo de antrenamente și planuri nutriționale, îmi propun să te educ despre corpul tău și să te ajut să înțelegi 
                  de ce facem anumite exerciții sau alegeri alimentare.
                </p>
              </div>
            </div>
          </div>

          {/* Photo Carousel Section */}
          <PhotoCarousel />

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Certificări și Educație</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-card border border-primary-200 dark:border-primary-900/30 p-6 rounded-lg shadow-md transition-all duration-300 hover:transform hover:scale-105 hover:border-primary-400 dark:hover:border-primary-700 hover:shadow-lg">
                <h3 className="text-xl font-bold mb-2">Educație Formală</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Absolventă a Colegiului Național "Unirea"</li>
                  <li>Studentă la UMFST, Nutriție și Dietetică</li>
                </ul>
              </div>
              <div className="bg-card border border-primary-200 dark:border-primary-900/30 p-6 rounded-lg shadow-md transition-all duration-300 hover:transform hover:scale-105 hover:border-primary-400 dark:hover:border-primary-700 hover:shadow-lg">
                <h3 className="text-xl font-bold mb-2">Certificări Internaționale</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Coregraf și Dansator Profesionist</li>
                  <li>Instructor de Fitness Certificat Level 2 și 4, <span className="ml-4">Antrenor de grup</span></li>
                </ul>
              </div>
            </div>

            {/* Partners Section */}
            <section id="partners" className="py-12 px-6 lg:px-12 mb-12">
              <h2 className="text-3xl font-bold mb-6 text-center">Partenerii Mei</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link 
                  href="https://18gym.ro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="bg-gradient-to-br from-[#f7cfd8]/50 to-[#ffe3e8]/50 hover:from-[#f7cfd8]/60 hover:to-[#ffe3e8]/60 border border-primary-200 rounded-lg shadow-sm p-6 h-full flex flex-col transition-colors duration-200">
                    <h4 className="text-lg font-semibold mb-2 text-center">18GYM</h4>
                    <p className="text-sm text-muted-foreground mb-4 text-center">
                      18GYM este lanțul premium de săli de fitness unde Sabina oferă sesiuni personalizate, asigurând rezultate rapide și o experiență de antrenament de top.
                    </p>
                    <p className="text-sm font-medium text-primary-600 mb-2 text-center">Cod promoțional: <strong>29SABINAM</strong></p>
                    <div className="mt-auto text-center">
                      <button className="inline-block bg-primary-500 text-white rounded-full py-2 px-4 hover:bg-primary-600 transition" aria-label="Vezi oferta 18GYM">
                        Vezi oferta 18GYM
                      </button>
                    </div>
                  </div>
                </Link>

                <Link 
                  href="https://scitec.ro/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="bg-gradient-to-br from-[#f7cfd8]/50 to-[#ffe3e8]/50 hover:from-[#f7cfd8]/60 hover:to-[#ffe3e8]/60 border border-primary-200 rounded-lg shadow-sm p-6 h-full flex flex-col transition-colors duration-200">
                    <h4 className="text-lg font-semibold mb-2 text-center">Scitec Nutrition</h4>
                    <p className="text-sm text-muted-foreground mb-4 text-center">
                      Scitec Nutrition furnizează suplimente și echipament sportiv de calitate superioară, optimizate pentru performanță și recuperare eficientă.
                    </p>
                    <p className="text-sm font-medium text-primary-600 mb-2 text-center">Cod promoțional: <strong>SABINAM10</strong></p>
                    <div className="mt-auto text-center">
                      <button className="inline-block bg-primary-500 text-white rounded-full py-2 px-4 hover:bg-primary-600 transition" aria-label="Descoperă Scitec">
                        Descoperă Scitec
                      </button>
                    </div>
                  </div>
                </Link>

                <Link 
                  href="https://gymhyper.ro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="bg-gradient-to-br from-[#f7cfd8]/50 to-[#ffe3e8]/50 hover:from-[#f7cfd8]/60 hover:to-[#ffe3e8]/60 border border-primary-200 rounded-lg shadow-sm p-6 h-full flex flex-col transition-colors duration-200">
                    <h4 className="text-lg font-semibold mb-2 text-center">GymHyper</h4>
                    <p className="text-sm text-muted-foreground mb-4 text-center">
                      GymHyper propune îmbrăcăminte și accesorii tehnice inovatoare, concepute pentru confort și susținerea oricărui tip de antrenament.
                    </p>
                    <div className="flex-grow"></div>
                    <div className="text-center mb-2">
                      <p className="text-sm font-medium text-primary-600">Cod promoțional:</p>
                      <p className="text-sm font-medium text-primary-600"><strong>SABINA</strong></p>
                    </div>
                    <div className="mt-auto text-center">
                      <button className="inline-block bg-primary-500 text-white rounded-full py-2 px-4 hover:bg-primary-600 transition" aria-label="Vizitează GymHyper">
                        Vizitează GymHyper
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            </section>

            <div className="text-center">
              <Button asChild size="lg" className="bg-primary-500 hover:bg-primary-600 text-white">
                <Link href="/contact" className="flex items-center">
                  Fă primul pas spre transformare
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}