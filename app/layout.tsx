import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/navigation';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://luminasanctuary.netlify.app'),
  title: 'Lumina Sanctuary | Luxury Living Redefined',
  description: 'Experience unparalleled luxury in our exclusive residential development.',
  icons: {
    icon: '/favicon.ico',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    viewportFit: 'cover',
  },
  openGraph: {
    title: 'Lumina Sanctuary | Luxury Living Redefined',
    description: 'Experience unparalleled luxury in our exclusive residential development.',
    url: 'https://luminasanctuary.netlify.app',
    siteName: 'Lumina Sanctuary',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lumina Sanctuary Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumina Sanctuary | Luxury Living Redefined',
    description: 'Experience unparalleled luxury in our exclusive residential development.',
    images: {
      url: '/og-image.jpg',
      alt: 'Lumina Sanctuary Preview'
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased min-h-screen flex flex-col overflow-x-hidden pb-[var(--sab)]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}