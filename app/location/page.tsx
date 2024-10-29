'use client';

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
import {
  ArrowRight,
  Car,
  GraduationCap,
  Utensils,
  Clock,
  MapPin,
  Building2,
  Train,
  Maximize2,
} from 'lucide-react';

const locationCategories = [
  {
    title: 'COMMUTE',
    icon: Train,
    items: [
      { name: 'Holland Village MRT Station (CCL)', time: '3 mins walk' },
      { name: 'Buona Vista MRT Station (CCL & EWL)', time: '2 mins drive' },
      { name: 'Ayer Rajah Expressway (AYE)', time: '5 mins drive' },
      { name: 'Farrer Road MRT Station (CCL)', time: '8 mins drive' },
      { name: 'Pan Island Expressway (PIE)', time: '14 mins drive' },
    ],
  },
  {
    title: 'SHOP',
    icon: Building2,
    items: [
      { name: 'Holland Road Shopping Centre', time: '4 mins walk' },
      { name: 'Raffles Holland V Mall', time: '5 mins walk' },
      { name: 'The Star Vista', time: '3 mins drive' },
      { name: 'Orchard Road shopping district', time: '11 mins drive' },
    ],
  },
  {
    title: 'DINE',
    icon: Utensils,
    items: [
      { name: 'Lorong Mambong', time: '1 min walk' },
      { name: 'Lorong Liput', time: '3 mins walk' },
      { name: 'Chip Bee Gardens', time: '7 mins walk' },
      { name: 'Dempsey Hill', time: '11 mins drive' },
    ],
  },
  {
    title: 'STUDY',
    icon: GraduationCap,
    items: [
      { name: 'Henry Park Primary School', time: '3 mins drive' },
      { name: 'Anglo-Chinese School (International)', time: '5 mins drive' },
      { name: 'Anglo-Chinese School (Independent)', time: '5 mins drive' },
      { name: 'National University of Singapore', time: '7 mins drive' },
      { name: 'Hwa Chong Institution', time: '7 mins drive' },
      { name: 'Nanyang Primary School', time: '7 mins drive' },
      { name: 'Nanyang Primary School', time: '8 mins drive' },
      { name: 'Singapore Polytechnic', time: '9 mins drive' },
      { name: 'National Junior College', time: '9 mins drive' },
      { name: "Raffles Girls' Primary School", time: '9 mins drive' },
      { name: "Methodist Girls' School", time: '10 mins drive' },
    ],
  },
  {
    title: 'EXPLORE',
    icon: MapPin,
    items: [{ name: 'Singapore Botanic Gardens', time: '10 mins drive' }],
  },
  {
    title: 'WORK',
    icon: Building2,
    items: [
      { name: 'one-north', time: '4 mins drive' },
      { name: 'Raffles Place', time: '15 mins drive' },
      { name: 'Marina Bay', time: '17 mins drive' },
    ],
  },
];

export default function Location() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="/location.jpg"
          alt="Neighborhood"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Prime Location</h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Situated in the most coveted neighborhood, offering the perfect
            blend of convenience and luxury
          </p>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
              <div className="relative aspect-video w-full">
                <Image
                  src="/site_plan.jpg"
                  alt="Holland Drive Residences Location Map"
                  fill
                  className="object-contain"
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
                    View Full Map
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-screen-xl w-[90vw]">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src="/site_plan.jpg"
                      alt="Holland Drive Residences Location Map"
                      fill
                      className="object-contain"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <div className="order-1 lg:order-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
                Explore the Location
              </h2>
              <div className="space-y-6 text-sm sm:text-base md:text-lg">
                <p>
                  Lumina Sancturary is an exquisite residential haven in the
                  heart of Prime District 10. Situated just minutes walk from
                  Holland Village MRT station, this esteemed address offers
                  unparalleled convenience and connectivity for residents
                  seeking the ultimate urban lifestyle experience.
                </p>
                <p>
                  Nestled within close proximity to various amenities, Lumina
                  Sancturary epitomizes modern living at its finest. Adjacent to
                  the vibrant One Holland Village, residents can immerse
                  themselves in a diverse array of F&B options and retail
                  offerings, ensuring every need and desire is effortlessly met.
                </p>
                <p>
                  Furthermore, Lumina Sancturary boasts a prestigious locale
                  surrounded by esteemed educational institutions. Families will
                  appreciate the convenience of having renowned schools such as
                  Henry Park Primary School, Anglo-Chinese School
                  (International), Fairfield Methodist School (Primary and
                  Secondary), and Anglo-Chinese Junior College within easy
                  reach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Location Categories */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Everything Within Reach
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the perfect balance of convenience and connectivity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locationCategories.map((category) => (
              <Card key={category.title}>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <category.icon className="h-6 w-6" />
                    <CardTitle>{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.items.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Clock className="h-5 w-5 mt-0.5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {item.time}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Register Interest Section */}
      <section className="relative py-24">
        <Image
          src="/footer.jpg"
          alt="Neighborhood"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            Secure Your Place in This Prime Location
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
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
