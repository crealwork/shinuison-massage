import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

const SITE_URL = "https://shinuison-massage.com";
const PHONE = "010-3419-5755";
const BUSINESS_NAME = "신의손 마사지";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "오남 마사지 | 신의손 마사지 - 경락·강한압·시원한 마사지 전문",
    template: "%s | 신의손 마사지 (오남 마사지)",
  },
  description:
    "오남·진접 마사지 전문 '身의손(신의손) 마사지'. 시원하고 압이 강한 경락·통증 마사지와 전신 신체관리. 남양주 오남·진접 숙련 관리사가 뭉친 근육을 시원하게 풀어드립니다. 예약문의 010-3419-5755.",
  keywords: [
    "오남 마사지",
    "오남읍 마사지",
    "진접 마사지",
    "진접읍 마사지",
    "신의손 마사지",
    "身의손 마사지",
    "경락마사지",
    "통증 마사지",
    "시원한 마사지",
    "강한압 마사지",
    "남양주 마사지",
    "전신관리",
    "신체관리",
    "근육통 마사지",
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
    title: "오남 마사지 | 신의손 마사지 - 시원한 경락·강한압 전문",
    description:
      "진짜 시원한 마사지, 압이 강한 경락마사지 전문. 오남 지역 숙련 관리사. 예약 010-3419-5755.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "신의손 마사지 - 오남 경락마사지 전문",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "오남 마사지 | 신의손 마사지",
    description: "시원한 경락마사지, 강한 압 전문. 예약 010-3419-5755.",
    images: ["/og.jpg"],
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
  alternateName: ["오남 마사지", "오남 신의손 마사지", "오남읍 마사지"],
  description:
    "오남읍 경락마사지 전문점. 시원하고 압이 강한 마사지와 전신 신체관리 서비스를 제공합니다.",
  url: SITE_URL,
  telephone: `+82-${PHONE.replace(/-/g, "").replace(/^0/, "")}`,
  image: `${SITE_URL}/og.jpg`,
  priceRange: "₩₩",
  address: {
    "@type": "PostalAddress",
    addressCountry: "KR",
    addressRegion: "경기도",
    addressLocality: "남양주시 진접읍",
    streetAddress: "진접읍 (오남 인접)",
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
      closes: "24:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "마사지 및 신체관리 서비스",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "경락마사지" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "전신 강한압 마사지" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "시원한 스포츠 마사지" } },
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
      </body>
    </html>
  );
}
