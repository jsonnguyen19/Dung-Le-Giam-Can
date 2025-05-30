import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/products/ProductDetail";
import { products } from "@/content/products";

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
          url: product.images[0],
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
      images: [product.images[0]],
    },
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  return <ProductDetail product={product} relatedProducts={relatedProducts} />;
}
