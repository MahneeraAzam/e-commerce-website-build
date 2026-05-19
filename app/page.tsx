import HeroCarousel from '@/components/HeroCarousel';
import CategoryFilter from '@/components/CategoryFilter';
import FeaturedProducts from '@/components/FeaturedProducts';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <HeroCarousel />
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-semibold text-foreground mb-6">Shop by Category</h3>
          <CategoryFilter />
        </div>
      </section>

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Testimonials Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of satisfied customers who trust StyleHub
            </p>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                About StyleHub
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Founded in 2024, StyleHub is dedicated to bringing you the finest selection of
                premium clothing and accessories. We believe that style should be accessible to
                everyone without compromising on quality.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our carefully curated collections are designed with the modern lifestyle in mind,
                combining timeless elegance with contemporary trends.
              </p>
              <Link
                href="/about"
                className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=600&h=400&fit=crop"
                alt="StyleHub Store"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Ready to Elevate Your Style?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Explore our latest collection and find pieces that express your unique personality.
          </p>
          <Link
            href="/products"
            className="inline-block bg-primary-foreground text-primary px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Start Shopping
          </Link>
        </div>
      </section>
    </main>
  );
}
