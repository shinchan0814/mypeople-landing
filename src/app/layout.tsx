import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
