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
import {
  ArrowRight,
  Award,
  Shield,
  Sparkles,
} from 'lucide-react';
import { LocationPreview } from '@/components/location-preview';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/website_video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Lumina Sanctuary
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            A new standard of luxury living coming soon to District 10
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="lighthover" className='min-w-full sm:min-w-0' asChild>
              <Link
                href="https://vimeo.com/1024271502?share=copy&autoplay=1&quality=1080p"
                target="_blank"
                rel="noopener noreferrer"
              >
                Preview Video
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 min-w-full sm:min-w-0" asChild>
              <Link href="/register">
                Register Interest
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Facts Section */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-8 mb-8">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-base sm:text-xl md:text-2xl">Site</CardTitle>
                <CardDescription className="text-sm sm:text-lg md:text-xl font-semibold">
                  Holland Drive GLS
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-base sm:text-xl md:text-2xl">Location</CardTitle>
                <CardDescription className="text-sm sm:text-lg md:text-xl font-semibold">
                  D10 - Tanglin / Holland
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-base sm:text-xl md:text-2xl">Tenure</CardTitle>
                <CardDescription className="text-sm sm:text-lg md:text-xl font-semibold">
                  99 Years
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="grid grid-cols-3 gap-8 mb-8">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-base sm:text-xl md:text-2xl">Units</CardTitle>
                <CardDescription className="text-sm sm:text-lg md:text-xl font-semibold">
                  Approx. 680
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-base sm:text-xl md:text-2xl">Site Area</CardTitle>
                <CardDescription className="text-sm sm:text-lg md:text-xl font-semibold">
                  133,343 sqft
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-base sm:text-xl md:text-2xl">TOP</CardTitle>
                <CardDescription className="text-sm sm:text-lg md:text-xl font-semibold">
                  TBA
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Card className="bg-gray-900 text-white dark:bg-gray-800">
            <CardHeader className="text-center">
              <CardTitle className="text-base sm:text-xl md:text-2xl">Developer</CardTitle>
              <CardDescription className=" text-gray-300 text-sm sm:text-lg md:text-xl font-semibold">
                CapitaLand Development, UOL Group, Singapore Land Group and
                Kheng Leong Co.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Elevated Living, Consciously Crafted
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Where timeless luxury meets innovative living, creating an
              unparalleled sanctuary of sophistication and sustainability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardHeader>
                <Award className="h-8 w-8 mb-4" />
                <CardTitle>Conscious Luxury</CardTitle>
                <CardDescription>
                  Exemplary sustainable design seamlessly integrated with
                  sophisticated living spaces
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 mb-4" />
                <CardTitle>Intelligent Living</CardTitle>
                <CardDescription>
                  Cutting-edge home automation crafted for effortless
                  sophistication
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Sparkles className="h-8 w-8 mb-4" />
                <CardTitle>Sanctuary Living</CardTitle>
                <CardDescription>
                  Thoughtfully orchestrated spaces fostering serenity and
                  rejuvenation
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-gray-900 text-white hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
              asChild
            >
              <Link href="/residences">
                Explore Our Residences
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Location Preview Section */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prime Location
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
              Situated in the heart of Holland Village, offering unparalleled
              connectivity
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
              <div className="relative aspect-video w-full">
                <Image
                  src="/site_plan.jpg"
                  alt="Holland Drive Residences Location Map"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="mb-16">
            <LocationPreview />
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-gray-900 text-white hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
              asChild
            >
              <Link href="/location">
                Explore Full Location Details
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
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
            Secure Your Place in This Elevated Development
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
