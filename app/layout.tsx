import SocketProvider from "@/providers/SocketProvider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";
import "./globals.css";

import StoreProvider from "./StoreProvider";
import Providers from "./providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Qx Broker — Admin",
  description: "Qx Broker admin panel",
  openGraph: {
    title: "Qx Broker — Admin",
    description: "Qx Broker admin panel",
    siteName: "Qx Broker",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <StoreProvider>
          <SocketProvider>
            <div style={{ background: "#0B0D12" }}>
              <Providers>{children}</Providers>
            </div>
            <Toaster />
          </SocketProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
