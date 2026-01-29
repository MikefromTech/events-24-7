import { Phone, MapPin, MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '+263774867390';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}?text=Hello%20Heritage%20Motors%2C%20I%27d%20like%20to%20enquire%20about%20your%20vehicles.`;

export const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/80">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          {/* Headline */}
          <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl mb-6">
            Ready to Find Your Next Car?
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Whether you're buying, selling, or importing — we're here to help. 
            Get in touch with our team today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-lg px-8 py-4"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href={`tel:${WHATSAPP_NUMBER}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/20 hover:bg-white/30 rounded-full text-lg font-semibold transition-colors"
            >
              <Phone className="w-6 h-6" />
              <span>+263 77 486 7390</span>
            </a>
          </div>

          {/* Location */}
          <div className="inline-flex items-center gap-2 text-primary-foreground/80">
            <MapPin className="w-5 h-5" />
            <span>Stand 40667 Tongogara Ave, Opposite Prince Edward School, Harare</span>
          </div>
        </div>
      </div>
    </section>
  );
};
