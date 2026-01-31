import React from 'react';

const ProductSkeletons = () => {
    return (
   <div className="card w-full bg-base-100 shadow-xl">
  <div className="bg-gray-200 animate-pulse h-48 w-full rounded"></div>

  <div className="card-body space-y-3">
    <div className="bg-gray-200 animate-pulse h-5 w-3/4 rounded"></div>
    <div className="bg-gray-200 animate-pulse h-4 w-1/2 rounded"></div>
    <div className="bg-gray-200 animate-pulse h-4 w-full rounded"></div>
    <div className="bg-gray-200 animate-pulse h-4 w-full rounded"></div>

    <div className="flex gap-3">
      <div className="bg-gray-200 animate-pulse h-6 w-20 rounded"></div>
      <div className="bg-gray-200 animate-pulse h-6 w-14 rounded"></div>
    </div>

    <div className="bg-gray-200 animate-pulse h-10 w-full rounded"></div>
  </div>
</div>

    );
};

export default ProductSkeletons;