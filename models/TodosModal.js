import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
    "user_id":String,
    "todo" : String,
    "state" : Boolean,
    "deadline":String,
    "_createdAt" : {type : Date, default : new Date()}
});

const TodoModal = mongoose.model('Todos',todoSchema);
export default TodoModal;