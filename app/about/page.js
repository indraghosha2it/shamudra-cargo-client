import React from "react";
import Company from "@/components/about/company";
import History from "@/components/about/history";
import Teams from "@/components/about/Teams";
import ProjectTabs from "@/components/about/project";

export const metadata = {
  title: "About Us | Samudera Traffic Co., Ltd. Group",
  description:
    "Learn more about Samudera Traffic Co., Ltd. Group, including our company story, history, team, projects, and pricing information.",
  keywords: [
    "Samudera Traffic Co., Ltd.",
    "About Us",
    "Logistics Company",
    "Company History",
    "Leadership Team",
    "Projects",
    "Pricing Table",
  ],
  alternates: {
    canonical: "http://localhost:3000/about",
  },
  openGraph: {
    title: "About Us | Samudera Traffic Co., Ltd. Group",
    description:
      "Learn more about Samudera Traffic Co., Ltd. Group, including our company story, history, team, projects, and pricing information.",
    url: "http://localhost:3000/about",
    siteName: "Samudera Traffic Co., Ltd. Group",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "Samudera Traffic Co., Ltd. Group - About Us",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Samudera Traffic Co., Ltd. Group",
    description:
      "Learn more about Samudera Traffic Co., Ltd. Group, including our company story, history, team, projects, and pricing information.",
    images: ["/og-about.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
          <Company />

     
      <ProjectTabs />
      <Teams />
      <History />


      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Us",
            url: "http://localhost:3000/about",
            description:
              "Learn more about Samudera Traffic Co., Ltd. Group, including our company story, history, team, projects, and pricing information.",
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