"use client";
import React from "react";

const ProductDetailsSkeleton = () => {
  return (
    <div className="mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8 animate-pulse">
      {/* Left Column */}
      <div className="flex flex-col space-y-4">
        {/* Image */}
        <div className="w-full h-[400px] bg-gray-200 rounded-lg"></div>

        {/* Title */}
        <div className="h-8 w-3/4 bg-gray-200 rounded"></div>

        {/* Bangla Title */}
        <div className="h-4 w-1/2 bg-gray-200 rounded"></div>

        {/* Ratings */}
        <div className="h-4 w-1/4 bg-gray-200 rounded"></div>

        {/* Price */}
        <div className="flex gap-3">
          <div className="h-6 w-20 bg-gray-200 rounded"></div>
          <div className="h-6 w-14 bg-gray-200 rounded"></div>
          <div className="h-6 w-10 bg-gray-200 rounded"></div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <div className="h-4 w-full bg-gray-200 rounded"></div>
          <div className="h-4 w-full bg-gray-200 rounded"></div>
          <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
        </div>

        {/* Features */}
        <div className="space-y-1">
          <div className="h-3 w-1/2 bg-gray-200 rounded"></div>
          <div className="h-3 w-1/3 bg-gray-200 rounded"></div>
          <div className="h-3 w-2/3 bg-gray-200 rounded"></div>
        </div>

        {/* Add to Cart Button */}
        <div className="h-10 w-full bg-gray-200 rounded mt-4"></div>
      </div>

      {/* Right Column: Q&A */}
      <div className="md:col-span-full mt-10 space-y-4">
        <div className="h-6 w-1/4 bg-gray-200 rounded mb-2"></div>

        {[...Array(3)].map((_, i) => (
          <div key={i} className="border p-4 rounded-lg space-y-2">
            <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
            <div className="h-3 w-full bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
