import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { InventoryShowcase } from '@/components/InventoryShowcase';
import { FeaturedCars } from '@/components/FeaturedCars';
import inventoryHero from '@/assets/cars/inventory-hero.jpg';

const Inventory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section with Background Image */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={inventoryHero} 
              alt="Heritage Motors Inventory" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          </div>
          
          {/* Content */}
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Our Inventory
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Quality vehicles with Zimbabwe plates — ready for immediate purchase. 
                From sedans to pickups, find your perfect match.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Vehicles */}
        <FeaturedCars />

        {/* More Arrivals / Inventory Showcase */}
        <InventoryShowcase />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Inventory;
