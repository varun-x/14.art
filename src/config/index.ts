import type { Metadata } from "next";

export const siteConfig: Metadata = {
  metadataBase: new URL("https://aarushi.art"),
  title: {
    default: "Aarushi Kapoor ",
    template: "%s | Aarushi Kapoor"
  },

  description: "Highly communicative and analytically driven professional skilled in data analysis, SQL, Power BI, and Excel. Experienced in deriving insights, tracking metrics, and supporting data-driven decision-making with strong problem-solving and relationship-building capabilities.",

  keywords: [
    "Aarushi Kapoor",
    "Data Analyst",
    "Power BI",
    "SQL",
    "Excel",
    "Data Analytics",
    "Business Intelligence",
    "Problem Solving",
    "Chandigarh University",
    "Sales Development",
    "Pipeline Building",
    "Data Visualization"
  ],

  authors: [
    {
      name: "Aarushi Kapoor",
      url: "https://aarushi.art"
    }
  ],

  creator: "Aarushi Kapoor",
  publisher: "Aarushi Kapoor",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aarushi.art",
    title: "Aarushi Kapoor | Data Analyst & Problem Solver",
    description: "Highly communicative and analytically driven professional skilled in data analysis, SQL, Power BI, and Excel. Experienced in deriving insights and supporting data-driven decision-making.",
    siteName: "Aarushi Kapoor Portfolio",
    images: [
      {
        url: "/og-image.png", // Open Graph Image - 1200x630px recommended
        width: 1200,
        height: 630,
        alt: "Aarushi Kapoor - Data Analyst & Problem Solver",
        type: "image/png"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "Aarushi Kapoor | Data Analyst & Problem Solver",
    description: "Highly communicative and analytically driven professional skilled in data analysis, SQL, Power BI, and Excel.",
    images: ["/twitter-image.png"], // Twitter Card Image - 1200x628px recommended
    creator: "@aarushikapoor" // Update with actual Twitter handle if available
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ]
  },

  manifest: "/site.webmanifest",

  alternates: { canonical: "https://aarushi.art" },

  category: "portfolio",

  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code"
  }
};
