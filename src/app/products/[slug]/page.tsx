import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/products/ProductDetail";
import { products } from "@/content/products";
import { getAbsoluteUrl } from "@/lib/getAbsoluteUrl";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export const dynamic = "force-static";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return {
      title: "Không tìm thấy sản phẩm - Dung Lê Giảm Cân",
      description: "Sản phẩm này không tồn tại hoặc đã bị xóa.",
    };
  }

  const title = product.name;
  const description = product.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: getAbsoluteUrl(product.images[0]),
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
      siteName: "Dung Lê Giảm Cân",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [getAbsoluteUrl(product.images[0])],
    },
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  // Get related products from same category, excluding current product
  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  // If not enough products in same category, fill with other products
  if (relatedProducts.length < 3) {
    const remainingProducts = products
      .filter((p) => p.id !== product.id && p.category !== product.category)
      .slice(0, 3 - relatedProducts.length);
    relatedProducts.push(...remainingProducts);
  }

  return <ProductDetail product={product} relatedProducts={relatedProducts} />;
}
