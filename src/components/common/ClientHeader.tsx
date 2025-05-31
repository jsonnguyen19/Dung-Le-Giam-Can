"use client";

import { useCartIconAnimation } from "@/hooks/useCartIconAnimation";
import { useResponsive } from "@/hooks/useResponsive";
import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { name: "Trang chủ", href: "/" },
  { name: "Giới thiệu", href: "/#about" },
  { name: "Sản phẩm", href: "/products" },
  { name: "Đánh giá", href: "/testimonials" },
  { name: "Đơn hàng", href: "/#order" },
  { name: "Liên hệ", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

interface ClientHeaderProps {
  initialTotalItems?: number;
}

export const ClientHeader = ({ initialTotalItems = 0 }: ClientHeaderProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const items = useCartStore((state) => state.items);
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const { isMobile } = useResponsive();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { isAnimating, triggerAnimation } = useCartIconAnimation();

  // Wait for hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Listen for cart changes and trigger animation
  useEffect(() => {
    if (mounted && totalItems > 0) {
      triggerAnimation();
    }
  }, [totalItems, triggerAnimation, mounted]);

  // Handle navigation click with Next.js router
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href === "/") {
      e.preventDefault();

      // If already on homepage, scroll to top and clear hash
      if (pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        // Clear hash from URL if it exists
        if (window.location.hash) {
          window.history.pushState({}, "", "/");
        }
      } else {
        // If on another page, navigate to homepage
        router.push("/");
      }
    } else if (href.startsWith("/#")) {
      // Handle hash links
      e.preventDefault();

      if (pathname === "/") {
        // If already on homepage, just scroll to the element
        const id = href.substring(2);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          // Cập nhật URL để hiển thị hash
          window.history.pushState({}, "", href);
        }
      } else {
        // If on another page, navigate to homepage with hash
        router.push(href);
      }
    }
  };

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

  // Use initial value until hydrated to prevent layout shift
  const displayTotalItems = mounted ? totalItems : initialTotalItems;

  return (
    <>
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
          href="/cart"
          className={`relative text-pink hover:text-pinkDark transition-all duration-300 ${
            isAnimating ? "scale-110" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className={`w-6 h-6 transition-transform duration-300 ${
              isAnimating ? "animate-bounce" : ""
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
          {displayTotalItems > 0 && (
            <span
              className={`absolute -top-2 -right-2 bg-pink text-white text-xs font-bold rounded-full min-w-[20px] h-5 px-1 flex items-center justify-center transition-all duration-300 ${
                isAnimating ? "scale-125 animate-pulse" : ""
              }`}
            >
              {displayTotalItems}
            </span>
          )}
        </Link>
      </div>

      {/* Mobile Navigation */}
      {isMobile && (
        <div className="flex items-center space-x-2">
          <Link
            href="/cart"
            className={`relative text-pink hover:text-pinkDark transition-all duration-300 p-2 ${
              isAnimating ? "scale-110" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className={`w-6 h-6 transition-transform duration-300 ${
                isAnimating ? "animate-bounce" : ""
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            {displayTotalItems > 0 && (
              <span
                className={`absolute -top-2 -right-2 bg-pink text-white text-xs font-bold rounded-full min-w-[20px] h-5 px-1 flex items-center justify-center transition-all duration-300 ${
                  isAnimating ? "scale-125 animate-pulse" : ""
                }`}
              >
                {displayTotalItems}
              </span>
            )}
          </Link>

          {/* Hamburger Button */}
          <button
            className="hamburger-button p-2 text-pink hover:text-pinkDark transition-colors"
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
                <div
                  className={`flex items-center justify-between text-pink hover:text-pinkDark transition-all duration-300 py-2 text-lg font-medium border-t border-gray-200 pt-4 mt-4 cursor-pointer ${
                    isAnimating ? "scale-105" : ""
                  }`}
                  onClick={() => {
                    setIsMenuOpen(false);
                    router.push("/cart");
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.8}
                      stroke="currentColor"
                      className={`w-6 h-6 transition-transform duration-300 ${
                        isAnimating ? "animate-bounce" : ""
                      }`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a .375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                    <span>Giỏ hàng</span>
                  </div>
                  {displayTotalItems > 0 && (
                    <span
                      className={`bg-pink text-white text-sm rounded-full w-6 h-6 flex items-center justify-center font-medium transition-all duration-300 ${
                        isAnimating ? "scale-125 animate-pulse" : ""
                      }`}
                    >
                      {displayTotalItems}
                    </span>
                  )}
                </div>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
};
