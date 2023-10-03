import "./globals.css";
import type { Metadata } from "next";

import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Global Power Rankings",
  description: "Generate predictions for LoL esports teams",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
