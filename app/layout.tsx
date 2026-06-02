import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "./components/SmoothScroll";

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Heads Up Leading — Helping the New Leader Lead Well",
  description:
    "Gary Wilson helps new and struggling leaders lead well through the Hat Rack Leadership Model. Speaking, executive coaching, and consulting for leaders, teams, and non-profits.",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrument.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen bg-bg text-ink">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
