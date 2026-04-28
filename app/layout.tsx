import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Caveat } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script";
import { Analytics } from '@vercel/analytics/next';
import Navbar from "@/components/navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-caveat',
});

export const metadata: Metadata = {
  title: "Shivam | Full Stack Developer - React, Node.js, Next.js",
  description: "Shivam is a full stack web developer specializing in React, Node.js, and Next.js. Available for freelance or full-time opportunities.",
  keywords: ["Full Stack Developer", "React Developer", "Next.js Developer", "Node.js", "Portfolio", "Shivam"],
  authors: [{ name: "Shivam", url: "https://shivam09.tech" }],
  creator: "Shivam",
  openGraph: {
    title: "Shivam | Full Stack Developer",
    description: "Explore Shivam's portfolio showcasing full stack projects built with React, Node.js, and Next.js.",
    url: "https://shivam09.tech",
    siteName: "Shivam Portfolio",
    type: "website",
    images: [
      {
        url: "https://shivam09.tech/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shivam | Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivam | Full Stack Developer",
    description: "React, Node.js, Next.js developer — check out my projects!",
    creator: "@shivam_visss",
    images: ["https://shivam09.tech/og-image.png"],
  },
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>

        {/* Microsoft Clarity - Only load in production */}

        <Script id='microsoft-clarity' strategy='afterInteractive'>
          {`
        (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "ujyxg00uvm");
        `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} antialiased dark:bg-neutral-900 text-black dark:text-white`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-auto mx-auto px-4 md:max-w-3xl">

            <Navbar />
            <div className="pt-16">
              {children}
            </div>
          </div>
        </ThemeProvider>
        <Analytics />

      </body>
    </html >
  );
}
