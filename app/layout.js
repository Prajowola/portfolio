import './globals.css';

export const metadata = {
  title: 'Prajawola Adhikari | Digital Marketing Portfolio',
  description:
    'Premium personal brand portfolio for digital marketing, social media, and campaign roles.',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'Prajawola Adhikari | Digital Marketing Portfolio',
    description:
      'Aspiring digital marketer showcasing campaign thinking, content creativity, and brand communication.',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
