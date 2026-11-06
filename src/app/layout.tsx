import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kauã | Desenvolvedor FullStack",
  description: "Portfólio de Kauã, desenvolvedor FullStack.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${instrumentSerif.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
