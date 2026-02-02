"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import ProductSkeletons from "../skeletons/ProductSkeletons";
import Link from "next/link";
import AddToCart from "../cartButtons/AddToCart";

const ProductCard = ({ product}) => {

  const discountedPrice =
    product.price - (product.price * product.discount) / 100;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      {!product && <ProductSkeletons></ProductSkeletons>}
      <figure className="relative h-48">
        <img
          src={product.image}
          alt={product.title}
         
          className="object-cover"
        />
        {product.discount > 0 && (
          <span className="badge badge-error absolute top-2 right-2">
            {product.discount}% OFF
          </span>
        )}
      </figure>

      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>

        {/* Rating & Reviews */}
        <div className="flex items-center gap-2 text-sm">
          <FaStar className="text-yellow-400" />
          <span>{product.ratings}</span>
          <span className="text-gray-400">
            ({product.reviews} reviews)
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-3">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-center gap-3 mt-2">
          <span className="text-lg font-bold text-primary">
            ৳{discountedPrice}
          </span>
          {product.discount > 0 && (
            <span className="line-through text-gray-400">
              ৳{product.price}
            </span>
          )}
        </div>
      <div className="card-actions mt-4">
          <Link
            href={`/product/${product._id}`}
            className="btn btn-outline w-full"
          >
            View Details
          </Link>
        </div>
        <div className="card-actions mt-4">
         <AddToCart></AddToCart>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
