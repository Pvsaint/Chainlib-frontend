import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/landingpage/NavBar";
import { Providers } from "@/components/blockchain/Providers";
import Footer from "@/components/landingpage/Footer";

export const metadata: Metadata = {
  title: "ChainLib",
  description: "An E-Libray Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
