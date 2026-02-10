import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";
import localFont from 'next/font/local'
import NextAuthProvider from "@/provider/NextAuthProvider";

const poppins = Poppins({
  weight: ["100", "200","400", "500", "600", "800"],
  variable: "--font-poppins",
  subsets: ["latin"], 
})

export const fontBangla = localFont({
  src: '../../public/fonts/mayaboti-normal.ttf',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Hero KidZ",
    template: "%s | Hero KidZ",
  },

  description:
    "Hero KidZ is a fun and educational platform designed to help kids learn, explore, and grow through interactive and child-friendly content.",

  applicationName: "Hero KidZ",

  keywords: [
    "Hero KidZ",
    "kids learning platform",
    "children education website",
    "educational app for kids",
    "learning with fun",
    "Next.js project",
    "frontend web application",
  ],

  authors: [{ name: "Rabeya Khatun" }],
  creator: "Rabeya Khatun",
  publisher: "Hero KidZ",

  metadataBase: new URL("https://hero-kidz-tau.vercel.app"),

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "https://ibb.co.com/b5VhP0hx",
    apple: "https://ibb.co.com/b5VhP0hx",
  },

  openGraph: {
    title: "Hero KidZ – Fun & Smart Learning for Kids",
    description:
      "Hero KidZ helps children learn through fun, interactive, and engaging educational experiences.",
    url: "https://hero-kidz-tau.vercel.app",
    siteName: "Hero KidZ",
    images: [
      {
        url: "https://ibb.co.com/KjBhsjVj", // homepage preview
        width: 1200,
        height: 630,
        alt: "Hero KidZ Homepage Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hero KidZ – Learning Made Fun",
    description:
      "An interactive and kid-friendly learning platform built with modern web technologies.",
    creator: "@herokidz",
    images: ["https://ibb.co.com/KjBhsjVj"],
  },

  category: "education",
};


export default function RootLayout({ children }) {
 
 
  return (
   <NextAuthProvider>
     <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <header className="py-2 md:w-11/12 mx-auto">
          <Navbar></Navbar>
        </header>
<main className="py-2 md:w-11/12 mx-auto">{children}</main>

        <footer>
          <Footer></Footer>
        </footer>
      </body>
    </html>
   </NextAuthProvider>
  );
}
