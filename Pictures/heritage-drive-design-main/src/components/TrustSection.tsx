import { Shield, Truck, Clock, Award, FileCheck, Users } from 'lucide-react';

const trustPoints = [
  {
    icon: Shield,
    title: 'Verified Quality',
    description: 'Every vehicle inspected and certified before sale',
  },
  {
    icon: Truck,
    title: 'Full Importation',
    description: 'Seamless car import & customs clearance services',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Always available on WhatsApp for your queries',
  },
  {
    icon: Award,
    title: '4.4★ Rated',
    description: 'Trusted by customers across Zimbabwe',
  },
  {
    icon: FileCheck,
    title: 'Legal Compliance',
    description: 'All paperwork handled professionally',
  },
  {
    icon: Users,
    title: 'Commission Sales',
    description: 'Sell your car through our network',
  },
];

export const TrustSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-accent text-accent-foreground">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1 bg-primary/20 text-primary-foreground rounded-full text-sm font-medium mb-4">
            Why Heritage Motors
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Zimbabwe's Trusted <span className="text-secondary">Car Dealership</span>
          </h2>
          <p className="text-lg text-accent-foreground/70 max-w-2xl mx-auto">
            Located on Tongogara Avenue, Harare — opposite Prince Edward School. 
            Professional service, premium vehicles, fair prices.
          </p>
        </div>

        {/* Trust Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {trustPoints.map((point, index) => (
            <div
              key={point.title}
              className="trust-badge bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <point.icon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
              <p className="text-accent-foreground/70">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
