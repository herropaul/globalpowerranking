import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";


const molend_regular = localFont({
  src: '../../public/fonts/MolendRegular-MVD6p.ttf',
  display: 'swap',
  variable: '--font-molend-regular'
})

const mark_medium = localFont({
  src: "../../public/fonts/Mark-Medium.ttf",
  display: 'swap',
  variable: '--font-mark-medium'
})

export const metadata: Metadata = {
  // title: "Global Power Rankings",
  description: "Generate predictions for LoL esports teams",
  title: {
    template: '%s | Global Power Rankings',
    default: 'Global Power Rankings'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" className={`${molend_regular.variable} ${mark_medium.variable}`}>
      <body className="font-mark-medium">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

