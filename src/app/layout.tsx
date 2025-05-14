import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import Providers from "@/providers/Providers";
import { Toaster } from "sonner";
import "./globals.css";
import "./style.css";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.png", // PNG favicon
  },
  title: "BasaFinder | Smart Rental & Housing Solution",
  description: "Smart Rental & Housing Solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head> */}
      <body className={`antialiased`}>
        <Providers>
          <Toaster richColors position="top-center" />
          {children}
        </Providers>
      </body>
    </html>
  );
}
