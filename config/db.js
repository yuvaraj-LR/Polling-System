import mongoose from "mongoose";

export const connectDB = async () => {
  console.log(process.env.mongoURI, "db uri");
  try {
    console.log("db connecting.process.env.mongoURI..");
    const res = await mongoose.connect(process.env.mongoURI);
    console.log(`mongodb connected with server ${res.connection.host}`);
  } catch (error) {
    console.log("mongodb connection failed!");
    console.log(error);
  }
};
