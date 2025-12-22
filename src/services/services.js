import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const registerUser = async ({name,email,password})=>{
    const hased = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hased,
    });
    return user;
};