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
        className="bg-white rounded-lg md:shadow-md overflow-hidden cursor-pointer"
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
            </button>
          </div>
        </div>
      </AnimatedDiv>
    </Link>
  );
};
