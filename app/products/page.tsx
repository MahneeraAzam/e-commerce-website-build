import CategoryFilter from '@/components/CategoryFilter';
import FeaturedProducts from '@/components/FeaturedProducts';

export const metadata = {
  title: 'Shop - StyleHub',
  description: 'Browse our complete collection of premium clothing and accessories',
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="bg-muted py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Our Collection
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover our complete range of premium clothing and accessories
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-semibold text-foreground mb-6">Shop by Category</h3>
          <CategoryFilter />
        </div>
      </section>

      {/* Products */}
      <FeaturedProducts />
    </main>
  );
}
