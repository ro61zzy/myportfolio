"use client"

// src/app/layout.tsx
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import { AppBar, Toolbar, Typography, CssBaseline, Container } from "@mui/material";
import "./globals.css";
import DrawerAppBar from "@/components/AppBar";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const showAppBar = pathname !== "/";

  return (
    <html lang="en">
      <body className={inter.className}>
        <CssBaseline />
        {showAppBar && (
          <DrawerAppBar />
        )}
        <div style={{backgroundColor:"#fff"}}>{children}</div>
      </body>
    </html>
  );
}
