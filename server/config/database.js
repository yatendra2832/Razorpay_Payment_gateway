import mongoose from "mongoose";
export const connectDB = async () => {

    const { connection } = await mongoose.connect(process.env.MONGODB_URI);

    console.log(`Mongodb is Connected with ${connection.host}`);
}