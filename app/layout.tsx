import type { Metadata } from "next";
import { Inter, Playfair_Display, Caveat, Raleway } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const font_artistic = Caveat({
  subsets: ["latin"],
  variable: "--font-artistic",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const font_modern = Raleway({
  subsets: ["latin"],
  variable: "--font-modern",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Roost and Roast - Premium Charcoal Chicken & Roast",
  description:
    "Experience the finest charcoal chicken and gourmet roasts. Fresh, flavorful, and fantastic.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logos/logo-rounded.png" />
      </head>
      <body
        className={clsx(
          inter.variable,
          playfair.variable,
          font_artistic.variable,
          font_modern.variable,
          "antialiased",
        )}
      >
        {children}
      </body>
    </html>
  );
}
