import { MapPin, Phone, Clock, Instagram } from 'lucide-react';
import logo from '@/assets/logo.jpg';

const WHATSAPP_NUMBER = '+263774867390';
const GOOGLE_MAPS_LINK = 'https://maps.google.com/?q=Heritage+Motors+Zimbabwe,+Tongogara+Ave,+Harare';

const quickLinks = [
  { name: 'Home', href: '#' },
  { name: 'Inventory', href: '#inventory' },
  { name: 'Brands', href: '#brands' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

const brands = ['Toyota', 'Nissan', 'Mercedes-Benz', 'BMW', 'Honda', 'Ford', 'Land Rover', 'Mazda'];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-accent text-accent-foreground">
      {/* Main Footer */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img
              src={logo}
              alt="Heritage Motors Zimbabwe"
              className="h-16 w-auto mb-6"
            />
            <p className="text-accent-foreground/70 mb-6">
              Zimbabwe's premier destination for quality new & used vehicles. 
              Professional importation and commission sales.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/musondosi_zw"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-whatsapp transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-accent-foreground/70 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Brands</h4>
            <ul className="space-y-3">
              {brands.map((brand) => (
                <li key={brand}>
                  <a
                    href={`#${brand.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-accent-foreground/70 hover:text-secondary transition-colors"
                  >
                    {brand}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-accent-foreground/70 hover:text-secondary transition-colors"
                >
                  <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>
                    Stand 40667 Tongogara Ave,<br />
                    Opposite Prince Edward School,<br />
                    Harare, Zimbabwe
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${WHATSAPP_NUMBER}`}
                  className="flex items-center gap-3 text-accent-foreground/70 hover:text-secondary transition-colors"
                >
                  <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span>+263 77 486 7390</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-accent-foreground/70">
                <Clock className="w-5 h-5 text-secondary flex-shrink-0" />
                <span>Open 24 Hours</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-accent-foreground/60">
          <p>© {currentYear} Heritage Motors Zimbabwe. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
