import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = new URL(
  process.env.URL ?? process.env.DEPLOY_PRIME_URL ?? "https://mikiiwigs.netlify.app",
);
const title = "MikiiWigs | Estilado de pelucas en Mérida";
const description =
  "Estilado de pelucas para cosplay, sesiones y personajes. Cotizaciones personalizadas por Instagram en Mérida, Yucatán.";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title,
  description,
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "es_MX",
    images: [
      {
        url: "/og.png",
        width: 1536,
        height: 1024,
        alt: "MikiiWigs, estilado de pelucas en Mérida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
