import type { Metadata } from "next";
import { Geist, Geist_Mono, Anton, Lato, Inter } from "next/font/google";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import ConditionalFooter from "@/components/ConditionalFooter";
import { AuthProvider } from "@/contexts/AuthContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
});

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Word Sanctuary Global - Your Digital Sanctuary for Words",
  description:
    "Welcome to Word Sanctuary Global - a peaceful space where language comes alive and stories find their home. Connect, fellowship, and grow with us.",
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} ${lato.variable} ${inter.variable} antialiased`}
      >
        <AuthProvider>
          <PerformanceMonitor />
          <div className="min-h-screen flex flex-col">
            <main className="flex-1">{children}</main>
            <ConditionalFooter />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
