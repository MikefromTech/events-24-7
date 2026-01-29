import { ChevronRight, Play } from 'lucide-react';
import heroVideo from '@/assets/hero-video.mp4';

const WHATSAPP_NUMBER = '+263774867390';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}?text=Hello%20Heritage%20Motors%2C%20I%27m%20interested%20in%20your%20vehicles.`;
const GOOGLE_MAPS_LINK = 'https://maps.google.com/?q=Heritage+Motors+Zimbabwe,+Tongogara+Ave,+Harare';

export const HeroSection = () => {
  return (
    <section className="relative h-[80vh] md:h-[90vh] min-h-[600px] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 hero-overlay hidden md:block" />
        <div className="absolute inset-0 hero-overlay-mobile md:hidden" />
      </div>

      {/* Content */}
      <div className="relative h-full container flex items-center md:items-center">
        <div className="max-w-2xl text-white pt-20 md:pt-0">
          {/* Badge */}
          <div className="animate-fade-up mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse-subtle" />
              Zimbabwe's Premium Car Dealership
            </span>
          </div>

          {/* Headline */}
          <h1 
            className="heading-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 text-shadow animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            Drive Your <br />
            <span className="text-gradient bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Dream Car
            </span>
          </h1>

          {/* Subheadline */}
          <p 
            className="text-lg md:text-xl text-white/80 mb-8 max-w-lg animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            Premium quality new & used vehicles in Harare. 
            Professional car importation, clearance, and commission sales.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            <a href="#inventory" className="btn-hero group">
              <span>View Inventory</span>
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-outline group"
            >
              <Play className="w-5 h-5 mr-2" />
              <span>Enquire Now</span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div 
            className="flex flex-wrap items-center gap-6 mt-10 text-sm text-white/70 animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="flex items-center gap-2">
              <span className="text-gold text-lg">★★★★</span>
              <span>4.4 Google Rating</span>
            </div>
            <div className="w-px h-4 bg-white/30 hidden sm:block" />
            <span>24/7 Support</span>
            <div className="w-px h-4 bg-white/30 hidden sm:block" />
            <a 
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors"
            >
              Tongogara Ave, Harare
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block animate-fade-up" style={{ animationDelay: '0.5s' }}>
        <div className="flex flex-col items-center gap-2 text-white/60 text-sm">
          <span>Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};
