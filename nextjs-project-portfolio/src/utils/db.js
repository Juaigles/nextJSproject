import mongoose from "mongoose";

const connect = async () => {
    mongoose.set('strictQuery', false);
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("DB is connected");
    } catch (error) {
        throw new Error('Connection failed!')
    }
}

export default connect;