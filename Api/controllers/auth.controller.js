import User from "../models/user.model.js";
import bycrypt from "bcrypt";
import { errorHandler } from "../utils/error.js";
// import { valid } from "joi";
import  jwt  from "jsonwebtoken";

export const UserAuthentication = async (req, res, next) => {
  const { username, email, password } = req.body;
  // ten is the salt value that makes the password encybted
  const hashedPassword = bycrypt.hashSync(password, 10);
  // create it to the database and save to the databse
  const newUser = new User({ username, email, password: hashedPassword });
  // it takes time we use await to not to get an error when waiting

  try {
    await newUser.save();
    res.status(201).json("user Created successfully");
  } catch (error) {
    next(errorHandler(550, "error from the function"));
  }
};
export const Signin = async  (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({email})
if (!validUser) return next(errorHandler(404, 'User not found!')) 
  const validPassword = bycrypt.compareSync(password, validUser.password);
if(!validPassword) return next(errorHandler(401, 'wrong credentials'));
const token =jwt.sign({id: validUser._id}, process.env.JWT_SECRET);
const {password:pass, ...rest } =validUser._doc;
res.cookie('access_token', token,{httpOnly: true }).status(200).json(rest);

  } catch (error) {
    next(error);
    
  }
}
