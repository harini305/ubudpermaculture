import { Open_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollToTop from "@/components/ScrollToTop";
import FooterHeight from "@/components/FooterHeight";
import { siteUrl } from "@/lib/seo";
import { og } from "@/lib/images";
import "./globals.css";

// Exactly two font families on the whole site:
//   Georgia   - the typeface of the "Ubud Permaculture" name beside the logo (headings, brand name)
//   Open Sans - everything else (self-hosted by next/font, no automatic fallback face)
const sans = Open_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap", adjustFontFallback: false, fallback: ["sans-serif"] });

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ubud Permaculture — family-run organic farm near Ubud, Bali",
    template: "%s — Ubud Permaculture",
  },
  description:
    "A locally run family organic farm using Permaculture techniques, hidden in the jungle just 5km north of Ubud, Bali. Farm tours, workshops, cultural activities and glamping.",
  openGraph: {
    type: "website",
    siteName: "Ubud Permaculture",
    locale: "en_US",
    ...og("2024/12/IMG_0091-copy.jpg", "The Ubud Permaculture family"),
  },
  twitter: { card: "summary_large_image" },
};

export const viewport = {
  themeColor: "#32513c",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={sans.variable} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header logoWhite="/images/logo-white-80.webp" logoColour="/images/logo-colour-80.webp" />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <ScrollToTop />
        <FooterHeight />
      </body>
    </html>
  );
}
