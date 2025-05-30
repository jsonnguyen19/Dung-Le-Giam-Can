"use client";

import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/content/contact";
import { useCartStore } from "@/store/cartStore";

const handleNavClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string
) => {
  if (href === "/") {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Cập nhật URL sau khi scroll xong
    setTimeout(() => {
      window.history.pushState({}, "", href);
    }, 0);
  } else if (href.startsWith("/#")) {
    // Đã có CSS scroll-behavior: smooth xử lý
    return;
  }
};

const navigation = [
  { name: "Trang chủ", href: "/" },
  { name: "Giới thiệu", href: "/#about" },
  { name: "Sản phẩm", href: "/products" },
  { name: "Đơn hàng", href: "/#order" },
  { name: "Liên hệ", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

export const Header = () => {
  const items = useCartStore((state) => state.items);
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center space-x-2"
          onClick={(e) => handleNavClick(e, "/")}
        >
          <Image
            src="/images/logo/logo.jpg"
            alt="Dung Lê Giảm Cân"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <span className="text-xl font-bold text-pink">Dung Lê Giảm Cân</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-pink transition-colors"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/#cart"
            className="relative text-pink hover:text-pinkDark transition-colors"
          >
            🛒
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
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
                href="https://www.tiktok.com/@shopdungle5"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/images/social/tiktok.jpg"
                  alt="TikTok"
                  width={40}
                  height={40}
                  className="rounded"
                />
              </a>
              <a
                href="https://zalo.me/0937221892"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/images/social/zalo.jpg"
                  alt="Zalo"
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
