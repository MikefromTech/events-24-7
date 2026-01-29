import T11 from '@/assets/cars/T11.jpg';
import T13 from '@/assets/cars/T13.jpg';
import T14 from '@/assets/cars/T14.jpg';
import T15 from '@/assets/cars/T15.jpg';
import T16 from '@/assets/cars/T16.jpg';
import T17 from '@/assets/cars/T17.jpg';
import T18 from '@/assets/cars/T18.jpg';
import T19 from '@/assets/cars/T19.jpg';
import T20 from '@/assets/cars/T20.jpg';
import ford1 from '@/assets/cars/ford-1.jpg';

const WHATSAPP_NUMBER = '+263774867390';

const showcaseCars = [
  {
    id: 1,
    name: 'Toyota Hilux GR Sport',
    year: '2023',
    category: 'Pickup',
    image: T11,
  },
  {
    id: 2,
    name: 'Mercedes-Benz A-Class',
    year: '2019',
    category: 'Hatchback',
    image: T13,
  },
  {
    id: 3,
    name: 'Toyota Hilux Legend',
    year: '2021',
    category: 'Pickup',
    image: T14,
  },
  {
    id: 4,
    name: 'Honda Fit',
    year: '2020',
    category: 'Compact',
    image: T15,
  },
  {
    id: 5,
    name: 'Mercedes-Benz E-Class',
    year: '2018',
    category: 'Sedan',
    image: T16,
  },
  {
    id: 6,
    name: 'Honda Vezel',
    year: '2021',
    category: 'SUV',
    image: T17,
  },
  {
    id: 7,
    name: 'Mini Cooper',
    year: '2019',
    category: 'Compact',
    image: T18,
  },
  {
    id: 8,
    name: 'Isuzu D-Max',
    year: '2022',
    category: 'Pickup',
    image: T19,
  },
  {
    id: 9,
    name: 'BMW 5 Series',
    year: '2020',
    category: 'Sedan',
    image: T20,
  },
  {
    id: 10,
    name: 'Ford Ranger Wildtrak',
    year: '2022',
    category: 'Pickup',
    image: ford1,
  },
];

const getWhatsAppLink = (carName: string) => {
  const message = encodeURIComponent(`Hello Heritage Motors, I'm interested in the ${carName}. Please share more details.`);
  return `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}?text=${message}`;
};

export const InventoryShowcase = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            More Arrivals
          </span>
          <h2 className="section-title">Explore Our Inventory</h2>
          <p className="section-subtitle mx-auto">
            Quality vehicles with Zimbabwe plates — ready for immediate purchase.
            From sedans to pickups, find your perfect match.
          </p>
        </div>

        {/* Uniform Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {showcaseCars.map((car) => (
            <div key={car.id} className="car-card group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="car-card-overlay" />
                <div className="absolute top-3 left-3">
                  <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full">
                    {car.category}
                  </span>
                </div>
              </div>
              <div className="p-4 bg-card rounded-b-xl border-t-0">
                <h3 className="text-lg font-semibold text-foreground mb-1">{car.name}</h3>
                <p className="text-muted-foreground text-sm mb-3">{car.year}</p>
                <a
                  href={getWhatsAppLink(car.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:text-primary/80 transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Enquire Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}?text=${encodeURIComponent('Hello Heritage Motors, I would like to see your full inventory.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors"
          >
            View Full Inventory on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
