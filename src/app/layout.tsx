import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-XXXXXXXXXX";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyPeople - Your Closest 7 People",
  description: "A private space for meaningful connections with the people who matter most. Share moments, stay connected, feel closer.",
  keywords: ["social app", "private sharing", "close friends", "family app", "intimate social network"],
  authors: [{ name: "MyPeople" }],
  openGraph: {
    title: "MyPeople - Your Closest 7 People",
    description: "A private space for meaningful connections with the people who matter most.",
    url: "https://myppl.club",
    siteName: "MyPeople",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MyPeople - Your Closest 7 People",
    description: "A private space for meaningful connections with the people who matter most.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
