import { collections, dbConnect } from "@/app/lib/dbConnect";

export const getProducts = async ()=>{
    const products = await dbConnect(collections.TOYS).find().toArray();
    return products;
}

