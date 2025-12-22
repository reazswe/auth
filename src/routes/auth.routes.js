import express from "express";
import {register,login} from "../controllers/auth.controller.js";
import auth from "../middlewares/auth.middleware.js";
import role from "../middlewares/role.middleware.js";

const router = express.Router();

router.post("/register",register);
router.post("/login",login);

router.get("/profile",auth,(req,res)=>{
    res.json(req.user);
});

router.get("/admin",auth,role("admin"),(req,res)=>{
    res.json({message:"admin acces"});
});

export default router;