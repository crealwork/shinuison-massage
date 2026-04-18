import type { Metadata, Viewport } from "next";
import Script from "next/script";
import GoogleAnalytics from "./components/GoogleAnalytics";
import "./globals.css";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://shinuison-massage.vercel.app";
const PHONE = "010-3419-5755";
const BUSINESS_NAME = "신의손 마사지";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "오남마사지·남양주마사지 | 신의손 마사지 - 근육전문 마사지 (통증관리·시원함)",
    template: "%s | 신의손 마사지 (오남·남양주 근육전문 마사지)",
  },
  description:
    "오남마사지·남양주마사지는 근육전문 마사지 '身의손(신의손)'. 뭉친 근육을 풀어드리는 근육전문 마사지샵. 통증관리, 시원한 손맛, 경락·통증·신체관리까지. 남양주 오남읍 근육전문 마사지는 신의손. 예약 010-3419-5755.",
  keywords: [
    "근육전문 마사지",
    "근육 마사지",
    "남양주마사지",
    "오남마사지",
    "오남 마사지",
    "오남읍 마사지",
    "남양주 마사지",
    "남양주시 마사지",
    "진접 마사지",
    "진접읍 마사지",
    "신의손 마사지",
    "身의손 마사지",
    "경락마사지",
    "통증 마사지",
    "시원한 마사지",
    "통증관리 마사지",
    "근육통 마사지",
    "뭉친근육 마사지",
    "전신관리",
    "신체관리",
  ],
  authors: [{ name: BUSINESS_NAME }],
  creator: BUSINESS_NAME,
  publisher: BUSINESS_NAME,
  formatDetection: { telephone: true, address: true, email: false },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: BUSINESS_NAME,
    title: "근육전문 마사지 身의손 | 오남마사지·남양주마사지",
    description:
      "뭉친 근육을 풀어드리는 근육전문 마사지 '身의손'. 통증관리, 시원한 손맛. 예약 010-3419-5755.",
  },
  twitter: {
    card: "summary_large_image",
    title: "근육전문 마사지 身의손 | 오남·남양주",
    description:
      "오남·남양주 근육전문 마사지는 신의손. 통증관리, 시원한 손맛. 010-3419-5755.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#964d1a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HealthAndBeautyBusiness", "DaySpa"],
  "@id": `${SITE_URL}/#business`,
  name: "신의손 마사지",
  alternateName: [
    "근육전문 마사지 신의손",
    "身의손 근육전문",
    "오남마사지",
    "남양주마사지",
    "오남 마사지",
    "남양주 마사지",
    "오남 신의손 마사지",
    "오남읍 마사지",
  ],
  description:
    "남양주마사지·오남마사지 근육전문 마사지샵. 뭉친 근육을 풀어드리는 근육전문 마사지. 통증관리와 시원한 손맛, 경락·통증·신체관리 서비스 제공.",
  slogan: "근육전문 마사지",
  url: SITE_URL,
  telephone: `+82-${PHONE.replace(/-/g, "").replace(/^0/, "")}`,
  image: `${SITE_URL}/opengraph-image`,
  priceRange: "₩₩",
  address: {
    "@type": "PostalAddress",
    addressCountry: "KR",
    addressRegion: "경기도",
    addressLocality: "남양주시 오남읍",
    streetAddress: "진건오남로884번길 20, 1층 일부",
    postalCode: "",
  },
  areaServed: [
    { "@type": "City", name: "남양주시" },
    { "@type": "AdministrativeArea", name: "오남읍" },
    { "@type": "AdministrativeArea", name: "진접읍" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "10:00",
      closes: "20:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "근육전문 마사지 서비스",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "근육전문 마사지 - 전신" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "근육전문 마사지 - 목·어깨·등" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "근육전문 경락 마사지" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "통증·근육통 집중 관리" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "신체관리 / 바디케어" } },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="preconnect"
          href="https://cdn.jsdelivr.net"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body>
        {children}
        <Script id="ld-business" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(jsonLd)}
        </Script>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
