

import { collections, dbConnect } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";

export const getSingleProducts = async (id)=>{
if( id.length != 24){
    return null;
}
const query = {_id: new ObjectId(id)};
const product = await dbConnect(collections.TOYS).findOne(query);
return {...product, _id: product._id.toString()} || null
}