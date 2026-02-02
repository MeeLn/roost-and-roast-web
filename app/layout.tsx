import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
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
    <html lang="en" className={clsx(inter.variable, playfair.variable)}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
