import React from "react";

const ProductDetailsSkeleton = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-8 animate-pulse">

      {/* Image Skeleton */}
      <div className="skeleton h-[350px] w-full rounded-lg"></div>

      {/* Info Skeleton */}
      <div className="space-y-4">
        <div className="skeleton h-8 w-3/4"></div>
        <div className="skeleton h-4 w-1/2"></div>

        <div className="flex gap-3">
          <div className="skeleton h-6 w-16"></div>
          <div className="skeleton h-6 w-24"></div>
        </div>

        <div className="skeleton h-6 w-32"></div>

        <div className="space-y-2">
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-5/6"></div>
        </div>

        <div className="space-y-2">
          <div className="skeleton h-4 w-3/4"></div>
          <div className="skeleton h-4 w-2/3"></div>
          <div className="skeleton h-4 w-1/2"></div>
        </div>

        <div className="skeleton h-10 w-full"></div>
      </div>

      {/* Q&A Skeleton */}
      <div className="md:col-span-2 space-y-4 mt-10">
        <div className="skeleton h-6 w-48"></div>
        <div className="skeleton h-20 w-full"></div>
        <div className="skeleton h-20 w-full"></div>
      </div>

    </div>
  );
};

export default ProductDetailsSkeleton;
