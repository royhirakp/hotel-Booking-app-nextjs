import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StoreProvidor from "@/redux/storeProvidor/StoreProvidor";
const inter = Inter({ subsets: ["latin"] });

// to
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <StoreProvidor> {children} </StoreProvidor>
      </body>
    </html>
  );
}
