import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { MapPin, Clock, Phone, Award, Users, Car, Shield } from 'lucide-react';
import logo from '@/assets/logo.jpg';
import T15 from '@/assets/cars/T15.jpg';
import T16 from '@/assets/cars/T16.jpg';
import T18 from '@/assets/cars/T18.jpg';
import T19 from '@/assets/cars/T19.jpg';

const WHATSAPP_NUMBER = '+263774867390';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}`;
const GOOGLE_MAPS_LINK = 'https://maps.google.com/?q=Heritage+Motors+Zimbabwe,+Tongogara+Ave,+Harare';

const stats = [
  { icon: Car, value: '500+', label: 'Vehicles Sold' },
  { icon: Users, value: '1000+', label: 'Happy Customers' },
  { icon: Award, value: '4.4★', label: 'Google Rating' },
  { icon: Shield, value: '24/7', label: 'Support Available' },
];

const galleryImages = [
  { src: T15, alt: 'Honda Fit at dealership' },
  { src: T16, alt: 'Mercedes E-Class showroom' },
  { src: T18, alt: 'Mini Cooper display' },
  { src: T19, alt: 'Isuzu D-Max ready for delivery' },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-accent overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img 
              src={T15} 
              alt="Heritage Motors" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                About Heritage Motors
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                Zimbabwe's trusted destination for premium pre-owned vehicles. 
                We bring quality, transparency, and exceptional service to every customer.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 md:py-16 bg-muted/50">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center text-center p-6 bg-background rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <stat.icon className="w-10 h-10 text-primary mb-3" />
                  <span className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                    {stat.value}
                  </span>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Heritage Motors Zimbabwe was founded with a simple vision: to provide 
                    Zimbabweans with access to quality, reliable pre-owned vehicles at 
                    fair prices. Located in the heart of Harare on Tongogara Avenue, 
                    we've become a trusted name in the automotive industry.
                  </p>
                  <p>
                    We specialize in premium brands including Toyota, Mercedes-Benz, 
                    BMW, Nissan, Honda, Ford, Land Rover, and Mazda. Each vehicle in 
                    our inventory undergoes thorough inspection to ensure it meets 
                    our high standards.
                  </p>
                  <p>
                    What sets us apart is our commitment to transparency and customer 
                    satisfaction. We believe in building lasting relationships with 
                    our customers, offering 24/7 support and guidance throughout 
                    your car buying journey.
                  </p>
                </div>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp mt-8 inline-flex"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>Contact Us Today</span>
                </a>
              </div>
              <div className="relative">
                <img
                  src={T16}
                  alt="Heritage Motors Dealership"
                  className="rounded-xl shadow-xl w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg hidden md:block">
                  <img src={logo} alt="Heritage Motors" className="h-16 w-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="section-title">Our Showroom</h2>
              <p className="section-subtitle mx-auto">
                A glimpse of the quality vehicles available at Heritage Motors.
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {galleryImages.map((image, index) => (
                <div 
                  key={index} 
                  className="aspect-[4/3] rounded-xl overflow-hidden group"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="section-title">Visit Us</h2>
              <p className="section-subtitle mx-auto">
                Come see our full inventory in person at our Harare showroom.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a 
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center p-8 bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <MapPin className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Location</h3>
                <p className="text-muted-foreground text-sm">
                  Stand No: 40667<br />
                  Tongogara Ave, Harare
                </p>
              </a>
              <div className="flex flex-col items-center text-center p-8 bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <Clock className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Hours</h3>
                <p className="text-muted-foreground text-sm">
                  Open 24 Hours<br />
                  7 Days a Week
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-8 bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1">
                <Phone className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Contact</h3>
                <p className="text-muted-foreground text-sm">
                  +263 77 486 7390<br />
                  @musondosi_zw
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default About;
