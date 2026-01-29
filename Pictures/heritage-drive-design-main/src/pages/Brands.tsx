import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { BrandsSection } from '@/components/BrandsSection';
import brandsVideo from '@/assets/cars/brands-video.mp4';

const Brands = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Video Hero Section */}
        <section className="relative h-[50vh] md:h-[60vh] min-h-[400px] overflow-hidden">
          <div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={brandsVideo} type="video/mp4" />
            </video>
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
          </div>

          {/* Content */}
          <div className="relative h-full container flex items-end pb-12 md:pb-16">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-up">
                Premium Brands
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed animate-fade-up" style={{ animationDelay: '0.1s' }}>
                We partner with the world's most trusted automotive brands. 
                Quality vehicles from Japan, Germany, USA & beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Brands Showcase */}
        <BrandsSection />

        {/* Brand Categories */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Japanese Brands */}
              <div className="bg-muted/30 rounded-2xl p-8 hover:bg-muted/50 transition-colors">
                <h3 className="text-xl font-bold mb-4 text-foreground">Japanese Excellence</h3>
                <p className="text-muted-foreground mb-6">
                  Toyota, Nissan, Honda, Mazda, Isuzu — renowned for reliability and fuel efficiency.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    Industry-leading fuel economy
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    Exceptional resale value
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    Parts readily available in Zimbabwe
                  </li>
                </ul>
              </div>

              {/* German Brands */}
              <div className="bg-muted/30 rounded-2xl p-8 hover:bg-muted/50 transition-colors">
                <h3 className="text-xl font-bold mb-4 text-foreground">German Engineering</h3>
                <p className="text-muted-foreground mb-6">
                  Mercedes-Benz, BMW — precision engineering and luxury performance.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    Advanced safety technology
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    Superior driving dynamics
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    Premium interior craftsmanship
                  </li>
                </ul>
              </div>

              {/* British & American */}
              <div className="bg-muted/30 rounded-2xl p-8 hover:bg-muted/50 transition-colors">
                <h3 className="text-xl font-bold mb-4 text-foreground">British & American Power</h3>
                <p className="text-muted-foreground mb-6">
                  Land Rover, Ford, Mini — built for adventure and everyday excellence.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    Off-road capability
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    Rugged durability
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    Iconic design heritage
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-accent">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Looking for a Specific Brand?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              We can source any vehicle from our trusted network of suppliers. 
              Contact us with your requirements.
            </p>
            <a
              href="https://wa.me/263774867390?text=Hello%20Heritage%20Motors%2C%20I%27m%20looking%20for%20a%20specific%20vehicle."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-accent px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-colors"
            >
              Contact Us on WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Brands;
