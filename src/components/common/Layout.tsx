import { socialLinks } from "@/content/contact";
import Image from "next/image";
import Link from "next/link";
import { ClientHeader } from "./ClientHeader";

const navigation = [
  { name: "Trang chủ", href: "/" },
  { name: "Giới thiệu", href: "/#about" },
  { name: "Sản phẩm", href: "/products" },
  { name: "Đánh giá", href: "/testimonials" },
  { name: "Đơn hàng", href: "/#order" },
  { name: "Liên hệ", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo/logo.jpg"
            alt="Dung Lê Giảm Cân"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <span className="text-xl font-bold text-pink">Dung Lê Giảm Cân</span>
        </Link>

        {/* Client-side navigation */}
        <ClientHeader />
      </nav>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-pinkLight">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Về chúng tôi</h3>
            <p className="text-gray-600">
              Dung Lê Giảm Cân - Đồng hành cùng bạn trên hành trình đến vóc dáng
              mơ ước với các sản phẩm giảm cân an toàn, hiệu quả từ Thái Lan.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-pink transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Liên hệ</h3>
            <div className="space-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 hover:text-pink transition-colors"
                >
                  <span>{link.icon}</span>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Theo dõi chúng tôi</h3>
            <div className="flex space-x-4">
              <a
                href={socialLinks.find((link) => link.name === "TikTok")?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/images/social/tiktok.png"
                  alt="TikTok"
                  width={40}
                  height={40}
                  className="rounded"
                />
              </a>
              <a
                href={socialLinks.find((link) => link.name === "Zalo")?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/images/social/zalo.png"
                  alt="Zalo"
                  width={40}
                  height={40}
                  className="rounded"
                />
              </a>
              <a
                href="https://youtube.com/@DungLeGiamCan"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/images/social/youtube.png"
                  alt="YouTube"
                  width={40}
                  height={40}
                  className="rounded"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p>© 2025 Dung Lê Giảm Cân. Đã đăng ký bản quyền.</p>
        </div>
      </div>
    </footer>
  );
};
