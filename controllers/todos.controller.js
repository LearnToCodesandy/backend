import mongoose from "mongoose";
import TodoModal from "../models/TodosModal.js";


// create a new todo!
export const newTodo = async (req,res)=>{
    const newTodo = TodoModal(req.body);
    try {
        await newTodo.save()
        .then((todo)=>res.status(200).json(todo))
        .catch(err=>res.status(404).json(err))
    } catch (error) {
        res.status(500).json({message:'Unable to create a todo!',data:error})
    }
}

// update a todo
export const updateTodo = async (req,res)=>{
    console.log(req.params.update_id);
    try{
        await TodoModal.findByIdAndUpdate(req.params.update_id,req.body)
            .then(response=>res.status(200).json(response))
            .catch(error=>res.status(404).json(error))
    }catch(err){
        res.status(500).json({message: 'Unable to update this todo!',data:err})
    }
}

// delete a todo!
export const deleteTodo = async (req,res)=>{
    try{
        const deletedTodo = await TodoModal.findByIdAndDelete(req.params.todo_id);
        if(deletedTodo){
            console.log(deletedTodo);
            res.status(200).json({message:'Todo Deleted successfully!',data:deletedTodo})
        }else{
            res.status(404).json({message:'Todo not found!'})
        }
    }catch(err){
        res.status(500).json({message:'Unable to delete a todo!',data:error})
    }
}

// get all todos
export const getAllTodos = async (req,res)=>{
    try {
        const allTodos = await TodoModal.find({user_id : req.params.user_id});
        if(allTodos){
            res.status(200).json({message: 'Found some todos!',data:allTodos})
        }else{
            req.status(404).json({message:'Todos not found!'})
        }
    } catch (error) {
        res.status(500).json({message:'Unable to access the store!',data:error})
    }
}