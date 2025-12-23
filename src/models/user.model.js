import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  name:String,
  email: {type:String,unique:true},
  password: {type:String,required:true,select:false},
  role:{type:String,enum:["USER","ADMIN"],default:"USER"}
});
const User = mongoose.model("User",UserSchema);
export default User;