import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "One11 Luxury Car Rentals",
  description:
    "One11 Luxury Car Rentals offers premium luxury car rentals throughout the UAE. Our meticulously curated selection of high-end vehicles ensures a superior blend of comfort and elegance.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
        <div className="fixed bottom-4 right-4 z-30">
          <Link href="https://wa.me/971542793532" target="_blank">
            <Image src="/wa-logo.png" alt="WhatsApp" width={50} height={50} />
          </Link>
        </div>
      </body>
    </html>
  );
}
