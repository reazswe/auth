import dotenv from "dotenv";
dotenv.config();

import app from "./src/app.js";
import connectDB from "./src/config/db.js";

await connectDB();
const PORT = process.env.PORT;


app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
});