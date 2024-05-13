import Joi from 'joi';
import mongoose from 'mongoose';

// Define Joi schema for user data validation
const userSchemaValidation = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
}).options({ allowUnknown: true }); // Allow unknown properties (like "_id")


// Create Schema 
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar:{
    type:String,
    default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3emn3f2mpTWupUc2I-amL8sdIzuD6lyiCL_aK_oHTWg&s"
  },
}, { timestamps: true });

// Middleware to validate user input using Joi schema
userSchema.pre('save', async function (next) {
  try {
    await userSchemaValidation.validateAsync(this.toObject());
    next();
  } catch (error) {
    next(error);
  }
});

// Create a Model
const User = mongoose.model('User', userSchema);

export default User;
