"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useResponsive } from "@/hooks/useResponsive";
import { products } from "@/content/products";
import { blogPosts } from "@/content/blogs";

// Map path segments to Vietnamese names
const pathNames: Record<string, string> = {
  products: "Sản phẩm",
  blog: "Blog",
  contact: "Liên hệ",
  cart: "Giỏ hàng",
  order: "Đơn hàng",
  about: "Giới thiệu",
  "order-success": "Đặt hàng thành công",
  "privacy-policy": "Chính sách bảo mật",
  "terms-of-service": "Điều khoản dịch vụ",
};

// This component handles both breadcrumb for desktop and back button for mobile
export const PageNavigation = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { isMobile } = useResponsive();

  // Don't show navigation on the homepage
  if (pathname === "/") {
    return null;
  }

  // Split the path to generate breadcrumb segments and handle hash routes
  const [basePath, hash] = pathname.split("#");
  const pathSegments = basePath.split("/").filter(Boolean);

  // Helper function to get display name for a segment
  const getDisplayName = (segment: string, fullPath: string[]) => {
    // Handle dynamic routes first
    if (fullPath[0] === "products" && segment === fullPath[1]) {
      const product = products.find((p) => p.slug === segment);
      if (product) return product.name;
    }
    if (fullPath[0] === "blog" && segment === fullPath[1]) {
      const blog = blogPosts.find((b) => b.slug === segment);
      if (blog) return blog.title;
    }

    // Check if there's a mapped name
    if (pathNames[segment]) return pathNames[segment];

    // Fallback: capitalize first letter and replace hyphens with spaces
    return segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // If we're on mobile, show a back button
  if (isMobile) {
    // Get current page title for display
    let pageTitle = "";
    if (pathSegments.length > 0) {
      const lastSegment = pathSegments[pathSegments.length - 1];
      pageTitle = getDisplayName(lastSegment, pathSegments);
    }

    // Capitalize the first letter if it's a single word
    if (pageTitle && !pageTitle.includes(" ")) {
      pageTitle = pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1);
    }

    return (
      <div className="bg-white border-b shadow-sm mt-16 sticky top-16 z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center py-3.5">
            <button
              onClick={() => {
                // For product details, go to products page
                if (
                  pathSegments.length === 2 &&
                  pathSegments[0] === "products"
                ) {
                  router.push("/products");
                  // Cập nhật URL để hiển thị ở thanh địa chỉ
                  window.history.pushState({}, "", "/products");
                }
                // For blog details, go to blog page
                else if (
                  pathSegments.length === 2 &&
                  pathSegments[0] === "blog"
                ) {
                  router.push("/blog");
                  // Cập nhật URL để hiển thị ở thanh địa chỉ
                  window.history.pushState({}, "", "/blog");
                }
                // Otherwise just go back
                else {
                  router.back();
                }
              }}
              className="flex items-center justify-center text-gray-700 hover:text-pink transition-colors w-8 h-8"
              aria-label="Quay lại"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="flex-1 text-center font-medium text-gray-800 truncate px-2">
              {pageTitle}
            </div>

            {/* Empty div to balance the layout */}
            <div className="w-8"></div>
          </div>
        </div>
      </div>
    );
  }

  // For desktop, show breadcrumbs
  return (
    <div className="bg-white border-b shadow-sm py-3 md:mt-[72px] sticky top-16 z-10">
      <div className="container mx-auto px-4">
        <nav className="text-sm" aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex items-center">
            <li className="flex items-center">
              <Link
                href="/"
                className="text-gray-500 hover:text-pink font-medium"
              >
                Trang chủ
              </Link>
              {pathSegments.length > 0 && (
                <span className="mx-2 text-gray-400">/</span>
              )}
            </li>
            {pathSegments.map((segment, index) => {
              const path = `/${pathSegments.slice(0, index + 1).join("/")}${
                hash ? `#${hash}` : ""
              }`;
              const isLast = index === pathSegments.length - 1;

              // Get display name using our helper function
              const displayName = getDisplayName(segment, pathSegments);

              // If it's the last segment, mark it as current and don't make it a link
              return (
                <li key={path} className="flex items-center">
                  {isLast ? (
                    <span className="text-pink font-medium" aria-current="page">
                      {displayName}
                    </span>
                  ) : (
                    <>
                      <Link
                        href={path}
                        className="text-gray-500 hover:text-pink transition-colors"
                        onClick={(e) => {
                          if (path.includes("#")) {
                            e.preventDefault();
                            router.push(path);
                            window.history.pushState({}, "", path);
                          }
                        }}
                      >
                        {displayName}
                      </Link>
                      <span className="mx-2 text-gray-400" aria-hidden="true">
                        /
                      </span>
                    </>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
};
