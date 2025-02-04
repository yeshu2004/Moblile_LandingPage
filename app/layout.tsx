import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Innovation Unleashed",
  description: "Event by UxClub VIT Bhopal",
  icons: "/favicon.png", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-black"
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
