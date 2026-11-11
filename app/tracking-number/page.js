import TrackingPage from "@/components/trackingPage";
import React from "react";

// 🔹 SEO metadata for Track Shipment
export const metadata = {
  title: "Track Shipment | Samudera Traffic Co., Ltd. Group",
  description:
    "Track your shipment in real-time with Samudera Traffic Co., Ltd. Group. Enter your tracking number to get live updates on your cargo location, status, and estimated delivery time.",
  keywords: [
    "Samudera Traffic Co., Ltd.",
    "Track Shipment",
    "Tracking Number",
    "Shipment Tracking",
    "Cargo Tracking",
    "Freight Tracking",
    "Real-time Tracking",
    "Package Tracking",
    "Logistics Tracking",
    "Delivery Status",
  ],
  alternates: {
    canonical: "http://localhost:3000/tracking-number",
  },
  openGraph: {
    title: "Track Shipment | Samudera Traffic Co., Ltd. Group",
    description:
      "Track your shipment in real-time with Samudera Traffic Co., Ltd. Group. Enter your tracking number to get live updates on your cargo location, status, and estimated delivery time.",
    url: "http://localhost:3000/tracking-number",
    siteName: "Samudera Traffic Co., Ltd. Group",
    images: [
      {
        url: "/og-tracking.jpg",
        width: 1200,
        height: 630,
        alt: "Samudera Traffic Co., Ltd. Group - Track Shipment",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Track Shipment | Samudera Traffic Co., Ltd. Group",
    description:
      "Track your shipment in real-time with Samudera Traffic Co., Ltd. Group. Enter your tracking number for live updates.",
    images: ["/og-tracking.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      <TrackingPage />

      {/* 🔹 Schema Markup for Tracking Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Track Shipment",
            description:
              "Track your shipment in real-time with Samudera Traffic Co., Ltd. Group. Enter your tracking number to get live updates on your cargo location, status, and estimated delivery time.",
            url: "http://localhost:3000/tracking-number",
            publisher: {
              "@type": "Organization",
              name: "Samudera Traffic Co., Ltd. Group",
              url: "http://localhost:3000",
              logo: "http://localhost:3000/logo.png",
            },
            mainEntity: {
              "@type": "WebPageElement",
              name: "Shipment Tracking Form",
              description: "Real-time shipment tracking by tracking number",
            },
            potentialAction: {
              "@type": "Action",
              name: "Track Shipment",
              description: "Track your shipment by entering tracking number",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "http://localhost:3000/tracking-number",
                actionPlatform: ["https://schema.org/DesktopWebPlatform", "https://schema.org/MobileWebPlatform"],
              },
            },
          }),
        }}
      />

      {/* 🔹 Breadcrumb Schema for Tracking */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "http://localhost:3000",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Track Shipment",
                item: "http://localhost:3000/tracking-number",
              },
            ],
          }),
        }}
      />

      {/* 🔹 Tracking Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Shipment Tracking",
            provider: {
              "@type": "Organization",
              name: "Samudera Traffic Co., Ltd. Group",
            },
            areaServed: {
              "@type": "Country",
              name: "Worldwide",
            },
            description: "Real-time shipment tracking service for cargo and freight",
            potentialAction: {
              "@type": "TrackAction",
              name: "Track Shipment",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "http://localhost:3000/tracking-number/{tracking_number}",
                actionPlatform: ["https://schema.org/DesktopWebPlatform", "https://schema.org/MobileWebPlatform"],
              },
            },
          }),
        }}
      />
    </>
  );
}