import type { Metadata } from "next";
import { Poppins, Abril_Fatface } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const semiBoldPoppins = Poppins({
  weight: "600",
  subsets: ["latin"],
});

const abrilFatface = Abril_Fatface({
  weight: "400",
  subsets: ["latin"],
});

const regularPoppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const mediumPoppins = Poppins({
  weight: "500",
  subsets: ["latin"],
});

const boldPoppins = Poppins({
  weight: "700",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Victoria Fagundes",
  description: "Protifólio de Victoria Fagundes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${semiBoldPoppins.className} ${boldPoppins.className} ${regularPoppins.className} ${mediumPoppins.className} ${abrilFatface.className} antialiased`}
      >
        <Header></Header>
        <main className="bg-white">{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
