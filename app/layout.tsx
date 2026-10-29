import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Readie Hackathon",
  description: "Readie Hackathon Figma Design",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetBrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full max-w-[2000px] mx-auto flex flex-col text-sm md:text-base">
        <Header />
        <main className="flex-1 lg:mx-30">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
