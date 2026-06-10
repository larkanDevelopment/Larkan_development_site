import '../styles/globals.css';

export const metadata = {
  title: 'Larkan Development | Cute Custom Websites',
  description: 'Friendly custom websites, web apps, dashboards, and automations by Larkan Development.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
