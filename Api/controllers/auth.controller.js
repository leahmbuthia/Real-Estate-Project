import User from "../models/user.model.js";
import bycrypt from "bcrypt";
import { errorHandler } from "../utils/error.js";

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
