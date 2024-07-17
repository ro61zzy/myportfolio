"use client";

// src/app/layout.tsx
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import { CssBaseline } from "@mui/material";
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
        {showAppBar && <DrawerAppBar pathname={pathname} />}
        <div className="content">{children}</div>
      </body>
    </html>
  );
}
