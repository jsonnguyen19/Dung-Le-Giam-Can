import "./globals.css";
import type { Metadata } from "next";
import { Header, Footer } from "@/components/common/Layout";
import { PageNavigation } from "@/components/common/Navigation";
import { ZaloChatButton } from "@/components/common/ZaloChatButton";
import { ScrollToTopButton } from "@/components/common/ScrollToTopButton";
import { Inter } from "next/font/google";
import { StoreProvider } from "@/store/provider";
import { AddToCartProvider } from "@/context/AddToCartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://dunglegiamcan.vn"),
  title: {
    default: "Dung Lê Giảm Cân - Sản phẩm giảm cân từ Thái Lan",
    template: "%s | Dung Lê Giảm Cân",
  },
  description:
    "Dung Lê Giảm Cân cung cấp các sản phẩm giảm cân an toàn, hiệu quả từ Thái Lan. Giảm cân không yoyo, không tăng cân lại.",
  keywords: [
    "giảm cân",
    "giảm cân thái lan",
    "dung lê",
    "giảm cân an toàn",
    "trà giảm cân",
  ],
  authors: [{ name: "Dung Lê" }],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [
      { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://dunglegiamcan.vn",
    siteName: "Dung Lê Giảm Cân",
    title: "Dung Lê Giảm Cân - Sản phẩm giảm cân từ Thái Lan",
    description:
      "Dung Lê Giảm Cân cung cấp các sản phẩm giảm cân an toàn, hiệu quả từ Thái Lan. Giảm cân không yoyo, không tăng cân lại.",
    images: [
      {
        url: "/images/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "Dung Lê Giảm Cân Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dung Lê Giảm Cân - Sản phẩm giảm cân từ Thái Lan",
    description:
      "Dung Lê Giảm Cân cung cấp các sản phẩm giảm cân an toàn, hiệu quả từ Thái Lan. Giảm cân không yoyo, không tăng cân lại.",
    images: ["/images/logo/logo.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={inter.className}>
      <body className="min-h-screen flex flex-col">
        <StoreProvider>
          <AddToCartProvider>
            {/* Header is fixed positioned */}
            <Header />
            {/* PageNavigation handles its own spacing with mt-16 */}
            <PageNavigation />
            <main className="flex-grow">{children}</main>
            <Footer />
            <ZaloChatButton />
            <ScrollToTopButton />
          </AddToCartProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
