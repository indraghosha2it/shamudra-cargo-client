import History from "@/components/about/history";
import React from "react";

// 🔹 SEO metadata for Our History
export const metadata = {
  title: "Our History | Samudera Traffic Co., Ltd. Group",
  description:
    "Explore the journey of Samudera Traffic Co., Ltd. Group since 1984. Learn about our foundation, expansion, global reach, milestones, and achievements in the logistics industry.",
  keywords: [
    "Samudera Traffic Co., Ltd.",
    "Our History",
    "Company History",
    "Logistics Journey",
    "Air Freight Expansion",
    "Global Reach Logistics",
    "Logistics Milestones",
    "Transportation History",
    "Cargo Timeline",
    "Logistics Achievements",
  ],
  alternates: {
    canonical: "http://localhost:3000/history",
  },
  openGraph: {
    title: "Our History | Samudera Traffic Co., Ltd. Group",
    description:
      "Explore the journey of Samudera Traffic Co., Ltd. Group since 1984. Learn about our foundation, expansion, global reach, milestones, and achievements in the logistics industry.",
    url: "http://localhost:3000/history",
    siteName: "Samudera Traffic Co., Ltd. Group",
    images: [
      {
        url: "/og-history.jpg",
        width: 1200,
        height: 630,
        alt: "Samudera Traffic Co., Ltd. Group - Our History",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our History | Samudera Traffic Co., Ltd. Group",
    description:
      "Explore the journey of Samudera Traffic Co., Ltd. Group since 1984. Learn about our foundation, expansion, global reach, and milestones.",
    images: ["/og-history.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <History />

      {/* 🔹 Schema Markup for Our History */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Samudera Traffic Co., Ltd. Group",
            url: "http://localhost:3000/history",
            description:
              "Explore the journey of Samudera Traffic Co., Ltd. Group since 1984. Learn about our foundation, expansion, global reach, milestones, and achievements in the logistics industry.",
            foundingDate: "1984",
            foundingLocation: {
              "@type": "Place",
              name: "Company Founding Location",
            },
            brand: {
              "@type": "Brand",
              name: "Samudera Traffic Co., Ltd. Group",
            },
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