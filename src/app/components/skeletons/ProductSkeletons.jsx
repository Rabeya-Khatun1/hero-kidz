import React from 'react';

const ProductSkeletons = () => {
    return (
          <div className="card w-full bg-base-100 shadow-xl">
              <div className="skeleton h-48 w-full"></div>
      
              <div className="card-body space-y-3">
                <div className="skeleton h-5 w-3/4"></div>
                <div className="skeleton h-4 w-1/2"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
      
                <div className="flex gap-3">
                  <div className="skeleton h-6 w-20"></div>
                  <div className="skeleton h-6 w-14"></div>
                </div>
      
                <div className="skeleton h-10 w-full"></div>
              </div>
            </div>
    );
};

export default ProductSkeletons;