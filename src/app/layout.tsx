import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "all4Ps | B2B Robotics & Deep Tech Growth Agency",
  description:
    "Build market leadership that drives enterprise pipeline. Help enterprise buyers discover, trust, and choose your robotics brand with strategic positioning, GTM, ABM, and thought leadership.",
  icons: {
    icon: "/all4Ps-logo.webp",
  },
  keywords: [
    "robotics marketing",
    "deep tech GTM",
    "industrial automation ABM",
    "B2B tech demand generation",
    "robotics positioning agency",
  ],
  authors: [{ name: "all4Ps" }],
  openGraph: {
    title: "all4Ps | B2B Robotics & Deep Tech Growth Agency",
    description:
      "Build market leadership that drives enterprise pipeline. Strategy-led B2B marketing for robotics and industrial automation brands.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "all4Ps | B2B Robotics & Deep Tech Growth Agency",
    description:
      "Build market leadership that drives enterprise pipeline. Strategy-led B2B marketing for robotics and industrial automation brands.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased bg-[#05030A] text-[#F8F7FA] min-h-screen flex flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MQ34XNL7"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        {/* Google Tag Manager added*/}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MQ34XNL7');
          `}
        </Script>
      </body>
    </html>
  );
}
