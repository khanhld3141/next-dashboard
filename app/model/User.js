import mongoose from "mongoose";
import { Schema } from "mongoose";
const userSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        unique:true,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    img:{
        type:String,
        require:true
    },
    isAdmin:{
        type:Boolean,
        require:true,
        default:false
    },
    isActive:{
        type:Boolean,
        require:true
    },
    address:{
        type:String,
        required:true
    }
},{ timestamps: true })
export default mongoose.models.User ||mongoose.model('User',userSchema)