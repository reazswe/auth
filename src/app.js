import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";

const app = express ();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
if(process.env.NODE_ENV ==="development"){
    app.use(morgan("dev"));
}
app.use("/api/auth",authRoutes);
app.get("/",(req,res)=>{
    res.send("auth api is working with test");
});

app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).json({message:"something went wrong"});
});

export default app;