import './globals.css';

export const metadata = {
  title: 'Prajawola Adhikari | Digital Marketing Portfolio',
  description: 'Premium personal brand portfolio for digital marketing roles.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
