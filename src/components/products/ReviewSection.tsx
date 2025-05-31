"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Review,
  getReviewsByProductId,
  getReviewStats,
} from "@/content/reviews";
import { AnimatedDiv } from "@/components/motion/WithAnimation";

interface ReviewSectionProps {
  productId: string;
  averageRating: number;
  totalReviews: number;
}

const StarRating = ({
  rating,
  size = "w-4 h-4",
}: {
  rating: number;
  size?: string;
}) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`${size} ${
            i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const ReviewItem = ({ review }: { review: Review }) => {
  return (
    <AnimatedDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white border border-gray-200 rounded-lg p-6 space-y-4"
    >
      {/* User Info */}
      <div className="flex items-center gap-3">
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image
            src={review.userAvatar || "/images/users/anomynous.jpg"}
            alt={review.userName}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h4 className="font-semibold text-gray-900">{review.userName}</h4>
            {review.verified && (
              <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Đã mua hàng
              </div>
            )}
          </div>
          <div className="flex items-center gap-2 mt-1">
            <StarRating rating={review.rating} />
            <span className="text-sm text-gray-500">{review.date}</span>
          </div>
        </div>
      </div>

      {/* Review Content */}
      <p className="text-gray-700 leading-relaxed">{review.comment}</p>

      {/* Helpful */}
      {review.helpful && review.helpful > 0 && (
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <button className="flex items-center gap-1 hover:text-pink transition-colors">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L9 6m7 4v6m-7-4l-2.5 2.5M9 6L7 4"
              />
            </svg>
            Hữu ích ({review.helpful})
          </button>
        </div>
      )}
    </AnimatedDiv>
  );
};

export const ReviewSection = ({
  productId,
  averageRating,
  totalReviews,
}: ReviewSectionProps) => {
  const [showAll, setShowAll] = useState(false);
  const reviews = getReviewsByProductId(productId);
  const reviewStats = getReviewStats(productId);

  const displayedReviews = showAll ? reviews : reviews.slice(0, 3);

  return (
    <div className="space-y-6">
      {/* Rating Overview */}
      <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Đánh giá sản phẩm
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Overall Rating */}
          <div className="text-center md:text-left">
            <div className="text-4xl font-bold text-pink mb-2">
              {averageRating.toFixed(1)}
            </div>
            <StarRating rating={averageRating} size="w-6 h-6" />
            <p className="text-gray-600 mt-2">{totalReviews} đánh giá</p>
          </div>

          {/* Rating Breakdown */}
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className="flex items-center gap-2">
                <span className="text-sm w-8">{star} ⭐</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-yellow-400 h-2 rounded-full"
                    style={{
                      width:
                        totalReviews > 0
                          ? `${
                              (reviewStats[star as keyof typeof reviewStats] /
                                totalReviews) *
                              100
                            }%`
                          : "0%",
                    }}
                  />
                </div>
                <span className="text-sm text-gray-600 w-8">
                  {reviewStats[star as keyof typeof reviewStats]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews List */}
      {reviews.length > 0 && (
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-900">
            Bình luận từ khách hàng
          </h4>

          <div className="space-y-4">
            {displayedReviews.map((review) => (
              <ReviewItem key={review.id} review={review} />
            ))}
          </div>

          {/* Show More Button */}
          {reviews.length > 3 && (
            <div className="text-center pt-4">
              <button
                onClick={() => setShowAll(!showAll)}
                className="bg-pink text-white px-6 py-2 rounded-lg hover:bg-pinkDark transition-colors"
              >
                {showAll
                  ? `Thu gọn`
                  : `Xem thêm ${reviews.length - 3} đánh giá`}
              </button>
            </div>
          )}
        </div>
      )}

      {/* No Reviews */}
      {reviews.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p>Chưa có đánh giá nào cho sản phẩm này.</p>
          <p className="text-sm mt-2">
            Hãy là người đầu tiên đánh giá sản phẩm!
          </p>
        </div>
      )}
    </div>
  );
};
