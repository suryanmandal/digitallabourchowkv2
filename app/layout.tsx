import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleTranslateProvider from "@/components/GoogleTranslateProvider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const jakarta = localFont({
  src: "../public/fonts/PlusJakartaSans-VariableFont.woff2",
  variable: "--font-jakarta",
  display: "swap",
  weight: "400 800",
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
