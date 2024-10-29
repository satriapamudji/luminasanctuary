'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Building2, Menu, ArrowRight } from 'lucide-react';

const routes = [
  {
    href: '/',
    label: 'Home',
    active: (pathname: string) => pathname === '/',
  },
  {
    href: '/residences',
    label: 'Residences',
    active: (pathname: string) => pathname === '/residences',
  },
  {
    href: '/location',
    label: 'Location',
    active: (pathname: string) => pathname === '/location',
  },
];

export function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm dark:bg-gray-950/95'
          : 'bg-black/40 backdrop-blur-sm'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className={cn(
              'flex items-center space-x-2 text-xl font-bold',
              isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'
            )}
          >
            <span>Lumina Sanctuary</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  'text-sm font-medium transition-colors',
                  route.active(pathname)
                    ? isScrolled
                      ? 'text-gray-900 dark:text-white'
                      : 'text-white'
                    : isScrolled
                    ? 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                    : 'text-gray-200 hover:text-white'
                )}
              >
                {route.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              variant={isScrolled ? 'default' : 'secondary'}
              className={cn(
                isScrolled
                  ? 'bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100'
                  : 'bg-white text-gray-900 hover:bg-gray-100'
              )}
              asChild
            >
              <Link href="/register">
                Register Interest
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    'text-white',
                    isScrolled && 'text-gray-900 dark:text-white'
                  )}
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  {routes.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      className={cn(
                        'text-lg font-medium transition-colors hover:text-primary py-2',
                        route.active(pathname)
                          ? 'text-primary'
                          : 'text-muted-foreground'
                      )}
                    >
                      {route.label}
                    </Link>
                  ))}
                  <Button className="mt-4 w-full" asChild>
                    <Link href="/register">
                      Register Interest
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
