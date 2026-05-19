'use client';

import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { TESTIMONIALS } from '@/lib/data';
import { Star } from 'lucide-react';

export default function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg" ref={emblaRef}>
        <div className="embla__container flex">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] p-4"
            >
              <div className="bg-card p-8 rounded-lg border border-border h-full flex flex-col">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground mb-6 flex-1 leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-primary text-primary-foreground p-2 rounded-full hover:shadow-lg transition-shadow"
        aria-label="Previous testimonial"
      >
        ←
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-primary text-primary-foreground p-2 rounded-full hover:shadow-lg transition-shadow"
        aria-label="Next testimonial"
      >
        →
      </button>

      <style jsx global>{`
        .embla__container {
          display: flex;
        }
        .embla__slide {
          flex: 0 0 100%;
        }
      `}</style>
    </div>
  );
}
