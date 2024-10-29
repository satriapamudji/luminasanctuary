import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ArrowRight, BedDouble, Maximize, Maximize2 } from 'lucide-react';
import { UnitLayout } from '@/components/unit-layout';

export const metadata: Metadata = {
  title: 'Residences | Residences at Lumina Sanctuary',
  description:
    'Explore our luxurious residential units designed for modern living.',
};

const unitTypes = [
  {
    id: '1br-deluxe',
    title: '1-Bedroom Deluxe',
    description: 'Perfect for singles or couples',
    specs: {
      bedrooms: 1,
      size: '560',
      units: 120,
    },
    layout: '/plan_typea.png',
  },
  {
    id: '2br-platinum',
    title: '2-Bedroom Platinum',
    description: 'Ideal for small families',
    specs: {
      bedrooms: 2,
      size: '820',
      units: 160,
    },
    layout: '/plan_typeb.png',
  },
  {
    id: '2br-deluxe-study',
    title: '2-Bedroom Deluxe (S)',
    description: 'Extra space for work or leisure',
    specs: {
      bedrooms: 2,
      size: '960',
      units: 160,
    },
    layout: '/plan_typec.png',
  },
  {
    id: '3br-premium',
    title: '3-Bedroom Premium',
    description: 'Spacious living for families',
    specs: {
      bedrooms: 3,
      size: '1080',
      units: 120,
    },
    layout: '/plan_typed.png',
  },
  {
    id: '3br-premium-plus',
    title: '3-Bedroom Premium+',
    description: 'Enhanced comfort and luxury',
    specs: {
      bedrooms: 3,
      size: '960',
      units: 80,
    },
    layout: '/plan_typee.png',
  },
  {
    id: '4br-platinum',
    title: '4-Bedroom Platinum',
    description: 'Ultimate family living space',
    specs: {
      bedrooms: 4,
      size: '1080',
      units: 40,
    },
    layout: '/plan_typef.png',
  },
];

export default function Residences() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="/residences.jpg"
          alt="Luxury Residences"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-bold mb-6 text-4xl sm:text-5xl md:text-7xl">Our Residences</h1>
          <p className="text-lg md:text-xl lg:2xl mb-8 text-gray-200">
            Discover exceptional eco-friendly living spaces designed for modern
            luxury
          </p>
        </div>
      </section>

      {/* Site Plan Section */}
      <section className="py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="gap-8 xl:gap-12 items-center grid xl:grid-cols-2">
            <div className="order-2 xl:order-1 relative bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
              <div className="relative aspect-video w-full">
                <Image
                  src="/site_map.jpg"
                  alt="Site Plan"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="secondary"
                    className="absolute bottom-4 right-4 shadow-lg"
                    size="sm"
                  >
                    <Maximize2 className="h-4 w-4 mr-2" />
                    View Full Plan
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-screen-xl w-[90vw]">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src="/site_map.jpg"
                      alt="Site Plan"
                      fill
                      className="object-contain"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <div className="order-1 xl:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center xl:text-left">Site Plan</h2>
              <div className="hidden xl:block space-y-6 text-lg">
                <p>
                  Luxury and sophistication merge seamlessly on approximately
                  133,343 square feet of prime land. Crafted for those with
                  discerning tastes and providing an unmatched living
                  experience. From opulent interiors to top-tier amenities,
                  every detail is meticulously designed to exceed expectations,
                  offering a lifestyle of unparalleled luxury.
                </p>
                <p>
                  Experience a range of options to suit your needs with
                  approximately 680 units of various sizes. Whether you're an
                  investor seeking opportunities or a family looking for the
                  perfect home, this development has you covered.
                </p>
              </div>
            </div>
            <div className="mt-8 order-3 block xl:hidden space-y-6 text-sm sm:text-base md:text-lg">
                <p>
                  Luxury and sophistication merge seamlessly on approximately
                  133,343 square feet of prime land. Crafted for those with
                  discerning tastes and providing an unmatched living
                  experience. From opulent interiors to top-tier amenities,
                  every detail is meticulously designed to exceed expectations,
                  offering a lifestyle of unparalleled luxury.
                </p>
                <p>
                  Experience a range of options to suit your needs with
                  approximately 680 units of various sizes. Whether you're an
                  investor seeking opportunities or a family looking for the
                  perfect home, this development has you covered.
                </p>
              </div>
          </div>
        </div>
      </section>

      {/* Unit Types Section */}
      <section className="py-14 sm:py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Available Units
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
              Discover the ideal space that aligns with your lifestyle and
              aspirations
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {unitTypes.map((unit) => (
              <Card key={unit.id} className="overflow-hidden">
                <CardHeader>
                  <CardTitle>{unit.title}</CardTitle>
                  <CardDescription>{unit.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center space-x-2">
                      <BedDouble className="h-5 w-5" />
                      <span>{unit.specs.bedrooms} Bed</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Maximize className="h-5 w-5" />
                      <span>{unit.specs.size} sqft</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {unit.specs.units} units
                    </div>
                  </div>
                  <UnitLayout layout={unit.layout} title={unit.title} />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Luxury Amenities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience unparalleled luxury with world-class facilities crafted
              exclusively for the most discerning residents—all while embracing
              sustainable living.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Smart Home Living',
                description:
                  'A cutting-edge smart home experience, fully integrated through a single app, giving residents seamless control over lighting, climate, security, and more—an exclusive feature found nowhere else',
                image: '/amenities_app.jpg',
              },
              {
                title: 'EV Charging',
                description:
                  'Sustainable EV charging stations available on-site, designed to support eco-friendly living and cater to the needs of environmentally conscious residents',
                image: '/charging.jpg',
              },
              {
                title: 'Spa & Wellness',
                description:
                  'An eco-conscious sanctuary for relaxation, featuring sustainably designed massage rooms and a rejuvenating sauna, crafted to soothe both body and mind',
                image: '/wellness.jpg',
              },
              {
                title: 'Eco-Friendly Pool',
                description:
                  'Stunning pool that uses robotic cleaners, a natural moss based filtration system, and more, to reduce the use of chemicals and costs',
                image: '/amenity_pool.jpg',
              },
              {
                title: 'Open Spaces',
                description:
                  'Beautifully designed eco-friendly areas that blend technology and nature, providing families with a safe, inviting space for quality time, play, and relaxation',
                image: '/amenity_openspaces.jpg',
              },
              {
                title: 'Fitness Center',
                description:
                  'State-of-the-art equipments that are able to generate energy through exercise to promote active and sustainable lifestyles',
                image: '/amenity_gym.jpg',
              },
            ].map((amenity, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={amenity.image}
                    alt={amenity.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="mb-2">{amenity.title}</CardTitle>
                  <CardDescription>{amenity.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Register Interest Section */}
      <section className="relative py-24">
        <Image
          src="/footer.jpg"
          alt="Luxury Interior"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Secure Your Place in this Luxury Residence
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto max-w-2xl mx-auto mb-8 text-base md:text-xl">
            Register your interest now to receive exclusive updates and private
            viewing invitations
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/register">
              Secure My Place
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
