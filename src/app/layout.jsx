import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "La Dea Beauty | Gelnagels, Wimpers & Wenkbrauwen in Brugge",
  description:
    "Unleash Your Inner Goddess. La Dea Beauty in Brugge biedt gelnagels, wimperextensions, lash lift, wenkbrauwbehandelingen en tandenbleaching. Boek nu!",
  keywords:
    "La Dea Beauty, Brugge, gelnagels, wimperextensions, lash lift, wenkbrauwen, tandenbleaching, beauty salon",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  openGraph: {
    title: "La Dea Beauty | Unleash Your Inner Goddess",
    description:
      "Gelnagels, wimperextensions, lash lift, wenkbrauwen & tandenbleaching in Brugge.",
    url: "https://www.ladeabeauty.be",
    siteName: "La Dea Beauty",
    locale: "nl_BE",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
