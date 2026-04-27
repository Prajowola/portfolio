import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Prajawola Adhikari | Digital Marketing Portfolio',
  description: 'Premium personal brand portfolio for digital marketing roles.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen pt-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
