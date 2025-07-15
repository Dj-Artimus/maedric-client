import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";

export const metadata = {
  title: "MAEDRIC | Home",
  description: "MAEDRIC's vision is to bring an appreciation of quality to new collectors and make the beauty of coloured stones more accessible to collectors and jewellery lovers worldwide.",
  openGraph: {
    title: "MAEDRIC",
    description: "MAEDRIC's vision is to bring an appreciation of quality to new collectors and make the beauty of coloured stones more accessible to collectors and jewellery lovers worldwide.",
    url: "https://maedric.com",
    images: [
      {
        url: "https://maedric.com/maedricImg.png",
        width: 1200,
        height: 630,
        alt: "MAEDRIC",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MAEDRIC",
    description: "MAEDRIC's vision is to bring an appreciation of quality to new collectors and make the beauty of coloured stones more accessible to collectors and jewellery lovers worldwide.",
    images: ["https://maedric.com/maedricImg.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head >
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#788088" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="maedric, gemstones, jewellery, bespoke, luxury, fine jewellery" />
        <meta name="author" content="MAEDRIC" />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
        <meta name="twitter:site" content="@maedric" />
        <meta name="twitter:creator" content="@maedric" />

        <link rel="canonical" href="https://maedric.com/" />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Maedric",
              "url": "https://maedric.com",
              "logo": "https://maedric.com/maedricImg.png",
              "sameAs": [
                "https://www.instagram.com/maedricjewels",
                // Add other socials if any
              ]
            }),
          }}
        />
      </Head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
