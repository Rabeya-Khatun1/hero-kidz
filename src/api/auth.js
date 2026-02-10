"use server"
import bcrypt from "bcryptjs"
import { collections,dbConnect } from "@/app/lib/dbConnect"

export const postUsers = async (payload) => {
  const { email, password, name } = payload;
  if (!email || !password) return null;

  const usersCollection = await dbConnect(collections.USERS);

  const isExist = await usersCollection.findOne({ email });
  if (isExist) {
    return { success: false, message: "USER_EXISTS" };
  }

  const newUser = {
    providerId: "credentials",
    name,
    email,
    password: await bcrypt.hash(password, 14),
    role: "user",
  };

  const result = await usersCollection.insertOne(newUser);

  return {
    success: true,
    insertedId: result.insertedId.toString(),
  };
};

export const loginUser = async (payload)=>{
    const {email, password} = payload

    if(!email || !password) return null;
    
    const user = await dbConnect(collections.USERS).findOne({email})

if(!user ) return null;

const isMatched = await bcrypt.compare(email, password )
if(isMatched) {
    return user;
} else{
    return null;
}

}