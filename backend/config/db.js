import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const dbstring = `${process.env.MONGO_URI}/${process.env.DB_NAME}`;
    console.log(dbstring);
    const conn = await mongoose.connect(dbstring);

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error occured while DB connect -> ${error.message}`);
    process.exit();
  }
};

export default connectDB;
