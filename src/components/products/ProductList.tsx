"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AnimatedDiv } from "@/components/motion/WithAnimation";
import { Section } from "@/components/ui/Section";
import { ProductCard } from "@/components/products/ProductCard";
import { Product } from "@/content/products";
import { Search, Filter, Heart, Zap, Sparkles } from "lucide-react";

interface ProductListProps {
  products: Product[];
}

// Mapping category labels với icons và descriptions
const categoryInfo = {
  "weight-loss": {
    label: "🔥 Giảm Cân",
    description: "Sản phẩm giảm cân hiệu quả, đốt cháy mỏ thừa",
    icon: Zap,
    color: "bg-gradient-to-r from-orange-500 to-red-500",
  },
  detox: {
    label: "✨ Thải Độc",
    description: "Thanh lọc cơ thể, làm đẹp từ bên trong",
    icon: Sparkles,
    color: "bg-gradient-to-r from-green-500 to-emerald-500",
  },
  supplement: {
    label: "💖 Bổ Sung",
    description: "Hỗ trợ sức khỏe toàn diện",
    icon: Heart,
    color: "bg-gradient-to-r from-purple-500 to-pink-500",
  },
};

export const ProductList = ({ products }: ProductListProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Debounce search với 300ms delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  // Đọc params từ URL
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    const searchParam = searchParams.get("search");

    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
    if (searchParam) {
      setSearch(searchParam);
      setDebouncedSearch(searchParam);
    }
  }, [searchParams]);

  // Update URL khi debouncedSearch thay đổi
  useEffect(() => {
    if (search !== "" || debouncedSearch !== searchParams.get("search")) {
      updateURL(selectedCategory, debouncedSearch);
    }
  }, [debouncedSearch]);

  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );

  const updateURL = useCallback(
    (newCategory: string | null, newSearch: string) => {
      const params = new URLSearchParams();
      if (newCategory) params.set("category", newCategory);
      if (newSearch) params.set("search", newSearch);

      const newURL = params.toString()
        ? `/products?${params.toString()}`
        : "/products";
      router.push(newURL, { scroll: false });
    },
    [router]
  );

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    updateURL(category, debouncedSearch);
  };

  const handleSearchChange = (newSearch: string) => {
    setSearch(newSearch);
    // URL sẽ được update tự động qua useEffect khi debouncedSearch thay đổi
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      product.description.toLowerCase().includes(debouncedSearch.toLowerCase());
    const matchesCategory =
      !selectedCategory || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Nội dung cho section header dựa trên category
  const getSectionContent = () => {
    if (
      selectedCategory &&
      categoryInfo[selectedCategory as keyof typeof categoryInfo]
    ) {
      const info = categoryInfo[selectedCategory as keyof typeof categoryInfo];
      return {
        title: `Chọn sản phẩm ${info.label}`,
        subtitle: info.description,
      };
    }
    return {
      title: "Chọn sản phẩm phù hợp với bạn",
      subtitle:
        "Khám phá bộ sưu tập sản phẩm giảm cân chính hãng từ Thái Lan. Hiệu quả nhanh chóng, an toàn cho sức khỏe",
    };
  };

  const sectionContent = getSectionContent();

  return (
    <>
      <Section title={sectionContent.title} subtitle={sectionContent.subtitle}>
        {/* Search và Filter */}
        <div className="mb-6 space-y-4">
          {/* Search Box */}
          <div className="relative max-w-lg mx-auto">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              value={search}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink focus:border-transparent"
            />
          </div>

          {/* Category Filters - Compact Design */}
          <div className="flex gap-2 flex-wrap justify-center">
            {/* Tất cả button */}
            <button
              onClick={() => handleCategoryChange(null)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                !selectedCategory
                  ? "bg-pink text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
              }`}
            >
              🌟 Tất Cả
            </button>

            {/* Category buttons */}
            {categories.map((category) => {
              const info = categoryInfo[category as keyof typeof categoryInfo];
              if (!info) return null;

              const IconComponent = info.icon;

              return (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-1.5 ${
                    selectedCategory === category
                      ? `${info.color} text-white shadow-md`
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
                  }`}
                  title={info.description}
                >
                  <IconComponent size={16} />
                  <span className="hidden sm:inline">{info.label}</span>
                  <span className="sm:hidden">{info.label.split(" ")[1]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results count - Compact */}
        <div className="mb-4 text-center">
          <p className="text-sm text-gray-500">
            <span className="font-medium text-pink">
              {filteredProducts.length}
            </span>{" "}
            sản phẩm
            {selectedCategory && (
              <span className="text-gray-400">
                {" "}
                •{" "}
                {
                  categoryInfo[selectedCategory as keyof typeof categoryInfo]
                    ?.label
                }
              </span>
            )}
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <AnimatedDiv
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard
                  id={product.id}
                  image={product.images[0]}
                  name={product.name}
                  price={product.price}
                  description={product.description}
                  href={`/products/${product.slug}`}
                  soldCount={product.soldCount}
                  rating={product.rating}
                  reviewCount={product.reviewCount}
                  badges={product.badges}
                  verified={product.verified}
                />
              </AnimatedDiv>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="text-gray-300 mb-3">
              <Search size={40} className="mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-600 mb-2">
              Không tìm thấy sản phẩm
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Thử tìm kiếm với từ khóa khác hoặc chọn danh mục khác
            </p>
            <button
              onClick={() => {
                setSearch("");
                setDebouncedSearch("");
                setSelectedCategory(null);
                updateURL(null, "");
              }}
              className="px-4 py-2 bg-pink text-white rounded-lg hover:bg-pinkDark transition-colors text-sm"
            >
              Xem tất cả sản phẩm
            </button>
          </div>
        )}
      </Section>
    </>
  );
};
