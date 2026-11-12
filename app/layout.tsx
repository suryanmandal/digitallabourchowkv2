import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleTranslateProvider from "@/components/GoogleTranslateProvider";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Digital Labour Chowk | India's Leading Construction Workforce Platform",
  description:
    "A disruption-driven construction workforce platform connecting contractors, builders, and verified skilled trades across India.",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="font-sans min-h-screen bg-white text-slate-900 overflow-x-hidden flex flex-col">
        <GoogleTranslateProvider>
          {/* GLOBAL HEADER: Utility Bar, Brand Nav & Mega Menus */}
          <Header />

          {/* ACTIVE PAGE CONTENT */}
          <div className="flex-1 w-full">{children}</div>

          {/* GLOBAL FOOTER: Policies, Trades, Legal & Helplines */}
          <Footer />
        </GoogleTranslateProvider>
      </body>
    </html>
  );
}
