"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatedDiv } from "@/components/motion/WithAnimation";

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  description: string;
  href: string;
}

export const ProductCard = ({
  image,
  name,
  price,
  description,
  href,
}: ProductCardProps) => {
  return (
    <Link href={href}>
      <AnimatedDiv
        whileHover={{ y: -5 }}
        className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
      >
        <div className="relative h-48">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{name}</h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-pink font-bold">
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(price)}
            </span>
            <button className="text-pink hover:text-pinkDark transition-colors">
              🛒
            </button>
          </div>
        </div>
      </AnimatedDiv>
    </Link>
  );
};
