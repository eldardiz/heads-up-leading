import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "./components/SmoothScroll";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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
      className={`${fraunces.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
