import "./globals.css";
import type { Metadata } from "next";
import { Header, Footer } from "@/components/common/Layout";
import { PageNavigation } from "@/components/common/Navigation";
import { Inter } from "next/font/google";
import { StoreProvider } from "@/store/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dung Lê Giảm Cân - Sản phẩm giảm cân từ Thái Lan",
  description:
    "Dung Lê Giảm Cân cung cấp các sản phẩm giảm cân an toàn, hiệu quả từ Thái Lan. Giảm cân không yoyo, không tăng cân lại.",
  keywords: [
    "giảm cân",
    "giảm cân thái lan",
    "dung lê",
    "giảm cân an toàn",
    "trà giảm cân",
  ],
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
          {/* Header is fixed positioned */}
          <Header />
          {/* PageNavigation handles its own spacing with mt-16 */}
          <PageNavigation />
          <main className="flex-grow">{children}</main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
