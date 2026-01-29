const brands = [
  { 
    name: 'Toyota', 
    logo: 'https://www.carlogos.org/car-logos/toyota-logo.png',
  },
  { 
    name: 'Nissan', 
    logo: 'https://www.carlogos.org/car-logos/nissan-logo.png',
  },
  { 
    name: 'Mercedes-Benz', 
    logo: 'https://www.carlogos.org/car-logos/mercedes-benz-logo.png',
  },
  { 
    name: 'BMW', 
    logo: 'https://www.carlogos.org/car-logos/bmw-logo.png',
  },
  { 
    name: 'Honda', 
    logo: 'https://www.carlogos.org/car-logos/honda-logo.png',
  },
  { 
    name: 'Ford', 
    logo: 'https://www.carlogos.org/car-logos/ford-logo.png',
  },
  { 
    name: 'Land Rover', 
    logo: 'https://www.carlogos.org/car-logos/land-rover-logo.png',
  },
  { 
    name: 'Mazda', 
    logo: 'https://www.carlogos.org/car-logos/mazda-logo.png',
  },
  { 
    name: 'Isuzu', 
    logo: 'https://www.carlogos.org/car-logos/isuzu-logo.png',
  },
  { 
    name: 'Mini', 
    logo: 'https://www.carlogos.org/car-logos/mini-logo.png',
  },
];

export const BrandsSection = () => {
  return (
    <section id="brands" className="py-16 md:py-24 bg-muted/30 overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title">Premium Brands</h2>
          <p className="section-subtitle mx-auto">
            We deal in top automotive brands trusted worldwide. 
            Quality vehicles from Japan, Germany, USA & more.
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling brands */}
        <div className="flex animate-marquee">
          {/* First set */}
          {brands.map((brand) => (
            <a
              key={brand.name}
              href={`/inventory?brand=${encodeURIComponent(brand.name)}`}
              className="flex-shrink-0 mx-4 md:mx-8 flex flex-col items-center gap-2 p-4 md:p-6 bg-background/50 rounded-lg hover:bg-background transition-colors duration-300"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-12 md:max-h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300"
                  loading="lazy"
                />
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap">
                {brand.name}
              </span>
            </a>
          ))}
          {/* Duplicate set for seamless loop */}
          {brands.map((brand) => (
            <a
              key={`${brand.name}-dup`}
              href={`/inventory?brand=${encodeURIComponent(brand.name)}`}
              className="flex-shrink-0 mx-4 md:mx-8 flex flex-col items-center gap-2 p-4 md:p-6 bg-background/50 rounded-lg hover:bg-background transition-colors duration-300"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-12 md:max-h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300"
                  loading="lazy"
                />
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap">
                {brand.name}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="container">
        <div className="text-center mt-10">
          <p className="text-muted-foreground">
            Looking for a specific brand? <a href="#contact" className="text-primary font-medium hover:underline">Contact us</a>
          </p>
        </div>
      </div>
    </section>
  );
};
