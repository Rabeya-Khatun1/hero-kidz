import React from 'react';
import products from "@/data/toys.json";
import ProductCard from '../components/cards/ProductsCards';
import { getProducts } from '@/api/product/route';


const Products = async () => {
const products =await getProducts()
const product = products.map(product => ({
    ...product,
    _id: product._id.toString()
}));

    return (
        <div>
            <h1 className='text-center text-4xl font-bold mb-5'>Our Products</h1>
        <div className='grid grid-cols-3 md:grid-cols-5 gap-5'>
{product.map((prod)=>
<ProductCard key={prod.title} product={prod}>
       
</ProductCard>

)}
        </div>
        </div>

    );
};

export default Products;