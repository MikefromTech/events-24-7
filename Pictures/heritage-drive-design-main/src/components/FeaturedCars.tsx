import { ChevronRight } from 'lucide-react';
import mercedes1 from '@/assets/cars/mercedes-1.jpg';
import mercedes2 from '@/assets/cars/mercedes-2.jpg';
import mercedes3 from '@/assets/cars/mercedes-3.jpg';
import ford1 from '@/assets/cars/ford-1.jpg';
import nissan1 from '@/assets/cars/nissan-1.jpg';
import toyota1 from '@/assets/cars/toyota-1.jpg';
import honda1 from '@/assets/cars/honda-1.jpg';
import T17 from '@/assets/cars/T17.jpg';

const WHATSAPP_NUMBER = '+263774867390';

const featuredCars = [
  {
    id: 1,
    name: 'Mercedes-Benz C-Class',
    year: '2020',
    price: 'Enquire',
    mileage: '45,000 km',
    fuel: 'Petrol',
    image: mercedes1,
    badge: 'Featured',
  },
  {
    id: 2,
    name: 'Mercedes-Benz C200',
    year: '2019',
    price: 'Enquire',
    mileage: '52,000 km',
    fuel: 'Petrol',
    image: mercedes2,
    badge: null,
  },
  {
    id: 3,
    name: 'Ford Ranger Raptor',
    year: '2023',
    price: 'Enquire',
    mileage: '15,000 km',
    fuel: 'Diesel',
    image: ford1,
    badge: 'New Arrival',
  },
  {
    id: 4,
    name: 'Nissan Note',
    year: '2018',
    price: 'Enquire',
    mileage: '38,000 km',
    fuel: 'Petrol',
    image: nissan1,
    badge: null,
  },
  {
    id: 5,
    name: 'Toyota Hilux',
    year: '2019',
    price: 'Enquire',
    mileage: '62,000 km',
    fuel: 'Diesel',
    image: toyota1,
    badge: 'Popular',
  },
  {
    id: 6,
    name: 'Honda Fit Hybrid',
    year: '2020',
    price: 'Enquire',
    mileage: '28,000 km',
    fuel: 'Hybrid',
    image: honda1,
    badge: null,
  },
  {
    id: 7,
    name: 'Mercedes-Benz E-Class',
    year: '2017',
    price: 'Enquire',
    mileage: '78,000 km',
    fuel: 'Petrol',
    image: mercedes3,
    badge: 'Luxury',
  },
  {
    id: 8,
    name: 'Honda Vezel',
    year: '2021',
    price: 'Enquire',
    mileage: '22,000 km',
    fuel: 'Hybrid',
    image: T17,
    badge: 'Eco',
  },
];

const getWhatsAppLink = (carName: string) => {
  const message = encodeURIComponent(`Hello Heritage Motors, I'm interested in the ${carName}. Please share more details.`);
  return `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}?text=${message}`;
};

export const FeaturedCars = () => {
  return (
    <section id="inventory" className="py-16 md:py-24">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <h2 className="section-title">Featured Vehicles</h2>
            <p className="section-subtitle">
              Quality pre-owned vehicles with Zimbabwe plates, ready for the road.
            </p>
          </div>
          <a 
            href="/inventory" 
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            View all inventory
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>

        {/* Uniform Cars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredCars.map((car) => (
            <div key={car.id} className="car-card group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {car.badge && (
                  <span className="absolute top-3 left-3 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    {car.badge}
                  </span>
                )}
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={getWhatsAppLink(car.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#25D366] text-white text-sm font-medium rounded-lg hover:bg-[#22c55e] transition-colors"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Enquire Now
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-foreground line-clamp-1">
                    {car.name}
                  </h3>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{car.year}</span>
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-3">
                  <span className="px-2 py-1 bg-muted rounded">{car.mileage}</span>
                  <span className="px-2 py-1 bg-muted rounded">{car.fuel}</span>
                </div>
                <div className="pt-3 border-t flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">{car.price}</span>
                  <a
                    href={getWhatsAppLink(car.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Details →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
