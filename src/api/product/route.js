import { collections, dbConnect } from "@/app/lib/dbConnect";

export const getProducts = async () => {
  const collection = await dbConnect(collections.TOYS);
  const products = await collection.find().toArray();
  return products;
};
