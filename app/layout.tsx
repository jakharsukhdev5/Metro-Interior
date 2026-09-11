import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Metro Interior Decorators | Spaces Beyond Ordinary',
  description: 'Premium residential and commercial interior design in Bangalore. Bespoke spaces shaped around people, light and material.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
