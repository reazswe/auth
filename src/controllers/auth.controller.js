import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import generateToken from "../utils/generateToken.js";
import { registerUser } from "../services/auth.services.js";

export const register = async(req,res) =>{
    await registerUser(req.body);
    res.json({message:"user registerd"});

};
export const login = async(req,res) =>{
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(!user) return res.status(404).json({message:"User not Found"});

    const match = await bcrypt.compare(password,user.password);
    if(!match) return res.status(401).json({message:"wrong password"});

    const token = generateToken(user);
    res.json({token});

};