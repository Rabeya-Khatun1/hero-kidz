import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGO_URI;
const dbName = process.env.DBNAME;

export const collections = {
  TOYS: "toys",
  USERS: "users",
};

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  global._mongoClientPromise = client.connect(); // ✅ MUST
}

clientPromise = global._mongoClientPromise;

export const dbConnect = async (cname) => {
  const client = await clientPromise;
  return client.db(dbName).collection(cname);
};
