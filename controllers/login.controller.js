import bcrypt from "bcrypt";
import UserModal from "../models/UserModal.js"

// constants
const saltGenerations = 10;

// signup
export const addNewUser = async (req,res)=>{
    const {password,...items} = req.body;
    await bcrypt.hash(password,saltGenerations)
        .then(hashedPassword => req.body.password = hashedPassword);
    const newUser = UserModal(req.body);
    try {
        const response = await newUser.save();
        res.status(200).json(response); 
    } catch (error) {
        res.status(500).json(error);
    } 
}

// signin
export const loginUser = async (req,res)=>{
    try {
        const user = await UserModal.findOne({username : req.body.username});
        const {password,...safe_user} = user._doc;
        if(user){
            await bcrypt.compare(req.body.password,user._doc.password)
            .then((response)=>{
                if(response){
                    res.status(200).json({message: 'Login successful!',data:safe_user})
                }else{
                    res.status(400).json({message:'Wrong credentials!'});
                }
            })
            .catch((error)=>{
                console.log(error);
                res.status(404).json({message:'invalid password or username'});
            })
        }else{
            res.status(404).json({message: 'user not found!'})
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

// delete user
export const deleteUser = async (req,res)=>{
    try {
        const deletedUser = await UserModal.findByIdAndDelete(req.params.user_id)
        if(deletedUser){
            res.status(200).json({message:'Deleted successfully!!!'})
        }else{
            req.status(404).json({message:'user not found!!'})
        }
    } catch (error) {
        res.status(500).json({message:'error connecting to server',data:error})
    }
}