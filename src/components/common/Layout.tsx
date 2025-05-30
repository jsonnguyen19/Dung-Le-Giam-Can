"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { socialLinks } from "@/content/contact";
import { useCartStore } from "@/store/cartStore";
import { useResponsive } from "@/hooks/useResponsive";
import { useIsClient } from "@/hooks/useIsClient";

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
  const { isMobile } = useResponsive();
  const isClient = useIsClient();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking outside or on navigation
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        !target.closest(".mobile-menu") &&
        !target.closest(".hamburger-button")
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
      document.body.style.overflow = "hidden"; // Prevent scroll when menu is open
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleMobileNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setIsMenuOpen(false); // Close menu first
    handleNavClick(e, href);
  };

  if (!isClient) return null; // Prevent hydration mismatch

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

        {/* Desktop Navigation */}
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Navigation */}
        {isMobile && (
          <div className="flex items-center">
            {/* Hamburger Button */}
            <button
              className="hamburger-button p-2 text-gray-700 hover:text-pink transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        )}
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobile && isMenuOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />

          {/* Mobile Menu */}
          <div className="mobile-menu fixed top-16 left-0 right-0 bg-white shadow-lg z-50 border-t border-gray-200">
            <div className="container mx-auto px-4 py-6">
              <nav className="space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-gray-700 hover:text-pink transition-colors py-2 text-lg font-medium"
                    onClick={(e) => handleMobileNavClick(e, item.href)}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Cart Link in Mobile Menu */}
                <Link
                  href="/#cart"
                  className="flex items-center justify-between text-pink hover:text-pinkDark transition-colors py-2 text-lg font-medium border-t border-gray-200 pt-4 mt-4"
                  onClick={(e) => handleMobileNavClick(e, "/#cart")}
                >
                  <div className="flex items-center space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.8}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                    <span>Giỏ hàng</span>
                  </div>
                  {totalItems > 0 && (
                    <span className="bg-pink text-white text-sm rounded-full w-6 h-6 flex items-center justify-center font-medium">
                      {totalItems}
                    </span>
                  )}
                </Link>
              </nav>
            </div>
          </div>
        </>
      )}
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
