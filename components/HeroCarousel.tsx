'use client';

import { useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link';

const heroSlides = [
  {
    id: 1,
    title: 'Summer Collection',
    subtitle: 'Discover the latest trends in fashion',
    image: '/images/hero-1.jpg',
    cta: 'Shop Now',
  },
  {
    id: 2,
    title: 'Exclusive Deals',
    subtitle: 'Up to 50% off on selected items',
    image: '/images/hero-2.jpg',
    cta: 'View Sale',
  },
  {
    id: 3,
    title: 'New Arrivals',
    subtitle: 'Premium quality clothing for everyone',
    image: '/images/hero-3.jpg',
    cta: 'Explore',
  },
];

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="overflow-hidden rounded-lg shadow-lg">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {heroSlides.map((slide) => (
            <div
              key={slide.id}
              className="embla__slide flex-[0_0_100%] relative min-h-[500px] md:min-h-[600px]"
            >
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 lg:p-16">
                <div className="max-w-xl">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl text-white/90 mb-8 animate-slide-up">
                    {slide.subtitle}
                  </p>
                  <Link
                    href="/products"
                    className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    {slide.cta}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end z-10 pointer-events-none">
        <button
          onClick={scrollPrev}
          className="pointer-events-auto bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          ←
        </button>
        <button
          onClick={scrollNext}
          className="pointer-events-auto bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          aria-label="Next slide"
        >
          →
        </button>
      </div>

      <style jsx global>{`
        .embla {
          overflow: hidden;
        }
        .embla__container {
          display: flex;
        }
        .embla__slide {
          flex: 0 0 100%;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        .animate-slide-up {
          animation: slideUp 0.8s ease-out 0.2s both;
        }
      `}</style>
    </div>
  );
}
