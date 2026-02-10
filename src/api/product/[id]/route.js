

import { collections, dbConnect } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";

export const getSingleProducts = async (id) => {
  if (id.length !== 24) return null;

  const collection = await dbConnect(collections.TOYS);
  const product = await collection.findOne({ _id: new ObjectId(id) });

  if (!product) return null;

  return { ...product, _id: product._id.toString() };
};
