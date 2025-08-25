import type { Metadata } from "next";
import { Space_Mono, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/Navigation";
import SocialsBar from "@/components/SocialsBar";



const spaceMono = Space_Mono({
  variable: "--font-space",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({subsets: ["latin"], variable: "--font-inter"})

export const metadata: Metadata = {
  title: "Rose Wachuka",
  description: "Turning real-world problems into scalable solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body suppressHydrationWarning className={`${inter.variable} ${spaceMono.variable} ${playfair.variable}`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
              <Navigation />
            {children}
             <SocialsBar />
          </ThemeProvider>
      </body>
    </html>
  );
}
