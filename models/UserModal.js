import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    "firstname" : String,
    "lastname" : String,
    "username":String,
    "email" : String,
    "password" : String,
    "_createdAt" : {type : Date, default : new Date()}
});

const UserModal = mongoose.model('Users',userSchema);
export default UserModal;