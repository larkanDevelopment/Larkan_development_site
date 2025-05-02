import '../styles/globals.css';
import Head from 'next/head';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>Larkan Development | Tactical Software</title>
        <meta name="description" content="Premium custom software and website development by Larkan Development. Tactical-grade solutions for high-performance results." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
