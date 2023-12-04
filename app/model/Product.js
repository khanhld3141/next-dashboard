import mongoose from "mongoose";
import { Schema } from "mongoose";
const productSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true,
        min: 0
    },
    stock: {
        type: Number,
        require: true,
        min: 0
    },
    color: {
        type: String,
        require: true
    },
    size: {
        type: String,
        require: true
    },
    desc: {
        type: String,
        require: true
    },
    cate: {
        type: String,
        required: true
    }
}, { timestamps: true })
export default mongoose.models.Product || mongoose.model('Product', productSchema)