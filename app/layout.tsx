import "./globals.css";
import type { Metadata } from "next";
import { Nav, Footer } from "@/components/Shell";

export const metadata: Metadata = {
  title: "NovaPay Technologies | Building safer ways to move money",
  description: "NovaPay is a fictional fintech startup used as a safe demo target.",
  generator: "Next.js 14",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="stars" />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
