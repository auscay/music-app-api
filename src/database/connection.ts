import { connect } from "mongoose";

export const dbConnection = async (uri: string) => {
  try {
    const res = await connect(uri);
    if (res) console.log("Connected to MongoDB");
  } catch (error) {
    console.log("MongoDB connection error", error);
    process.exit(1);
  }
};

