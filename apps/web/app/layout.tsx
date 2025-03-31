import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Corrected path to font files
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  display: "swap",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zaldivar & Co.",
  description: "Crafted with care by Eddie Zaldivar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children?: React.ReactNode; // Optional to prevent crashing if no children
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {children || <div>No content available</div>}
      </body>
    </html>
  );
}
