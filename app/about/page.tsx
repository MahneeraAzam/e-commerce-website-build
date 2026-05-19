import Link from 'next/link';

export const metadata = {
  title: 'About - StyleHub',
  description: 'Learn about StyleHub and our mission to bring quality fashion to everyone',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">
            About StyleHub
          </h1>
          <p className="text-xl text-muted-foreground">
            Our story, values, and commitment to excellence
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-8">Our Story</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              StyleHub was founded with a simple mission: to make premium fashion accessible to
              everyone. We believe that quality clothing and stylish accessories should not come
              with an exorbitant price tag.
            </p>
            <p>
              Our journey began in 2024 when a group of fashion enthusiasts decided to create a
              platform that celebrates individuality and self-expression through clothing. We
              curate every piece in our collection to ensure it meets our strict quality standards
              and design principles.
            </p>
            <p>
              Today, StyleHub serves thousands of customers who share our passion for quality,
              style, and value. We continue to evolve our collection to reflect the latest trends
              while maintaining timeless elegance.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality First',
                description:
                  'We never compromise on quality. Every item is carefully selected and tested.',
              },
              {
                title: 'Sustainability',
                description:
                  'We are committed to responsible sourcing and eco-friendly practices.',
              },
              {
                title: 'Customer Love',
                description:
                  'Your satisfaction is our priority. We provide exceptional customer service.',
              },
            ].map((value, index) => (
              <div key={index} className="bg-card p-8 rounded-lg border border-border text-center">
                <h3 className="text-2xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Alex Chen', role: 'Founder & CEO' },
              { name: 'Sarah Mitchell', role: 'Head of Design' },
              { name: 'James Wilson', role: 'Operations Manager' },
              { name: 'Emma Rodriguez', role: 'Customer Success' },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-muted overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-${1494790108377 + index}?w=100&h=100&fit=crop`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-lg mb-8 opacity-90">
            Explore our collection and discover your next favorite piece.
          </p>
          <Link
            href="/products"
            className="inline-block bg-primary-foreground text-primary px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-all"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </main>
  );
}
