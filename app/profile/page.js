import ToastProvider from "@/components/common/ToastProvider";
import ProfilePage from "@/components/profile/profile";
import React, { Suspense } from "react";

// 🔹 SEO metadata for Profile
export const metadata = {
  title: "My Profile | Samudera Traffic Co., Ltd. Group",
  description:
    "Manage your Samudera Traffic Co., Ltd. Group profile. Update personal information, view business details, manage preferences, and access security settings for your logistics account.",
  keywords: [
    "Samudera Traffic Co., Ltd.",
    "My Profile",
    "Profile Settings",
    "Account Management",
    "User Profile",
    "Logistics Account",
    "Profile Update",
    "Account Settings",
    "Personal Information",
    "Business Profile",
  ],
  alternates: {
    canonical: "http://localhost:3000/profile",
  },
  openGraph: {
    title: "My Profile | Samudera Traffic Co., Ltd. Group",
    description:
      "Manage your Samudera Traffic Co., Ltd. Group profile. Update personal information, view business details, manage preferences, and access security settings for your logistics account.",
    url: "http://localhost:3000/profile",
    siteName: "Samudera Traffic Co., Ltd. Group",
    images: [
      {
        url: "/og-profile.jpg",
        width: 1200,
        height: 630,
        alt: "Samudera Traffic Co., Ltd. Group - My Profile",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Profile | Samudera Traffic Co., Ltd. Group",
    description:
      "Manage your Samudera Traffic Co., Ltd. Group profile. Update personal information, view business details, and manage preferences.",
    images: ["/og-profile.jpg"],
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      <Suspense>
          <ToastProvider />
        </Suspense>
      <ProfilePage />

      {/* 🔹 Schema Markup for Profile Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "User Profile",
            description:
              "Manage your Samudera Traffic Co., Ltd. Group profile. Update personal information, view business details, manage preferences, and access security settings.",
            url: "http://localhost:3000/profile",
            publisher: {
              "@type": "Organization",
              name: "Samudera Traffic Co., Ltd. Group",
              url: "http://localhost:3000",
              logo: "http://localhost:3000/logo.png",
            },
            mainEntity: {
              "@type": "ProfilePage",
              name: "Customer Profile",
              description: "User profile management for logistics account",
            },
          }),
        }}
      />

      {/* 🔹 Breadcrumb Schema for Profile */}
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
                name: "Customer Dashboard",
                item: "http://localhost:3000/customer/dashboard",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "My Profile",
                item: "http://localhost:3000/profile",
              },
            ],
          }),
        }}
      />

      {/* 🔹 Person Schema for Profile */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Samudera Traffic Co., Ltd. Customer",
            url: "http://localhost:3000/profile",
            email: "customer@samuderathai.com",
            telephone: "+66977830395",
            worksFor: {
              "@type": "Organization",
              name: "Samudera Traffic Co., Ltd. Group",
            },
            knowsAbout: [
              "Logistics Management",
              "Supply Chain",
              "Freight Shipping",
              "Warehousing",
            ],
          }),
        }}
      />
    </>
  );
}