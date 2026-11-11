import OurCompany from "@/components/about/company";
import React from "react";

// 🔹 SEO metadata for Our Company
export const metadata = {
  title: "Our Company | Samudera Traffic Co., Ltd. Group",
  description:
    "Discover Samudera Traffic Co., Ltd. Group, our mission, vision, and dedicated team providing logistics, supply chain management, warehousing, and cargo solutions worldwide.",
  keywords: [
    "Samudera Traffic Co., Ltd.",
    "Our Company",
    "Logistics Company",
    "Supply Chain Management",
    "Warehouse Solutions",
    "Cargo Services",
    "Freight Forwarding",
    "Transportation Services",
    "Logistics Partner",
  ],
  alternates: {
    canonical: "http://localhost:3000/our-company",
  },
  openGraph: {
    title: "Our Company | Samudera Traffic Co., Ltd. Group",
    description:
      "Discover Samudera Traffic Co., Ltd. Group, our mission, vision, and dedicated team providing logistics, supply chain management, warehousing, and cargo solutions worldwide.",
    url: "http://localhost:3000/our-company",
    siteName: "Samudera Traffic Co., Ltd. Group",
    images: [
      {
        url: "/og-our-company.jpg",
        width: 1200,
        height: 630,
        alt: "Samudera Traffic Co., Ltd. Group - Our Company",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Company | Samudera Traffic Co., Ltd. Group",
    description:
      "Discover Samudera Traffic Co., Ltd. Group, our mission, vision, and dedicated team providing logistics, supply chain management, warehousing, and cargo solutions worldwide.",
    images: ["/og-our-company.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <OurCompany />

      {/* 🔹 Schema Markup for Our Company */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "Our Company",
            url: "http://localhost:3000/our-company",
            description:
              "Discover Samudera Traffic Co., Ltd. Group, our mission, vision, and dedicated team providing logistics, supply chain management, warehousing, and cargo solutions worldwide.",
            publisher: {
              "@type": "Organization",
              name: "Samudera Traffic Co., Ltd. Group",
              url: "http://localhost:3000",
              logo: "http://localhost:3000/logo.png",
            },
          }),
        }}
      />
    </>
  );
}