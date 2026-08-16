import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-primary",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SENTRA | Platform Transformasi Digital untuk UMKM Indonesia",
  description: "SENTRA membantu usaha lokal memahami kesiapan digital, membangun identitas, memperkuat kehadiran online, dan menentukan langkah pertumbuhan yang lebih terarah.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${plusJakartaSans.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
