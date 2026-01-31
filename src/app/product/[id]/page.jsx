
import { getSingleProducts } from "@/api/product/[id]/route";
import { notFound } from "next/navigation";
import React from "react";

const ProductsDetails = async ({ params }) => {
const {id} = await params;
  const product= await getSingleProducts(id);

  // discounted price calculate
  const discountedPrice = product?.discount
    ? product.price - (product.price * product.discount) / 100
    : product.price;

  return (
    <div className=" mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      
   
<div className="flex flex-col">
     {/* Image */}
      <div className="w-[1200px]">
        <img
          src={product.image}
          alt={product.title}
          className="w-[1200px]  object-cover rounded-lg shadow"
        />
      </div>
      {/* Info */}
      <div className="space-y-4 w-[1200px]">
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="text-gray-600">{product.bangla}</p>

        {/* Ratings */}
        <div className="flex items-center gap-2 text-sm">
          <span className="text-yellow-500 font-semibold">
            ⭐ {product.ratings}
          </span>
          <span className="text-gray-400">
            ({product.reviews} reviews · {product.sold} sold)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-primary">
            ৳{discountedPrice}
          </span>
          {product.discount > 0 && (
            <>
              <span className="line-through text-gray-400">
                ৳{product.price}
              </span>
              <span className="badge badge-error">{product.discount}% OFF</span>
            </>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-700 w-full">
          {product.description}
        </p>

        {/* Features / info */}
        <ul className="list-disc pl-5 space-y-1">
          {Array.isArray(product.info) && product.info.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <button className="btn btn-primary w-full mt-4">
          Add to Cart
        </button>
      </div>

</div>
      {/* Q&A Section */}
      <div className="md:col-span-full mt-10">
        <h2 className="text-2xl font-semibold mb-4">Questions & Answers</h2>

        <div className="space-y-4 col-span-full">
          {Array.isArray(product.qna) && product.qna.length > 0 ? (
            product.qna.map((qa, index) => (
              <div key={index} className="border p-4 rounded-lg">
                <p className="font-medium">{qa.question}</p>
                <p className="text-gray-600 mt-1">{qa.answer}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No questions available for this product.</p>
          )}
        </div>
      </div>

    </div>
  );
};

export default ProductsDetails;
