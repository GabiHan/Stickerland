import type { Metadata } from "next";
import { Geist, Geist_Mono, Rancho } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rancho = Rancho({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rancho",
});

export const metadata: Metadata = {
  title: "Stickerland",
  description: "Created by Gabi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${rancho.variable}`}
    >
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}