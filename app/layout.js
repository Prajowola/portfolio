import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Providers from '@/components/Providers';
import ScrollProgress from '@/components/ScrollProgress';

export const metadata = {
  title: 'Prajowola Adhikari | Digital Marketing Portfolio',
  description: 'Premium personal brand portfolio for digital marketing roles.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <ScrollProgress />
          <Navbar />
          <main className="min-h-screen pt-28">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
