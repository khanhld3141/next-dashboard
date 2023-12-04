import { connect } from "mongoose";

export const connectToDb = async () => {
    try {
        await connect(process.env.MONGOOSE)
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log(error);
        console.log('Cannot connect to MongoDB');
    }
}