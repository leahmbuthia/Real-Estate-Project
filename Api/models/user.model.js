import { required } from "joi";
import mongoose from "mongoose";
// 


// Create Schema 

const userSchema = new mongoose.Schema({
    username:{
      type:String,
      required: true,  
      unique:true,

    },
    email:{
        type:String,
        required: true,  
        unique:true,
    },
    password:{
        type:String,
        required: true,  
    },
}, {timestamps: true});
// Create a Modal

const User = mongoose.model('User', userSchema);

export default User;
