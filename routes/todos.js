import {Router} from "express";
import { newTodo, updateTodo,deleteTodo,getAllTodos } from "../controllers/todos.controller.js";

const router = Router();

// create a todo
router.post('/newTodo',newTodo);

// delete a todo
router.delete('/deleteTodo/:todo_id',deleteTodo);

// update a todo
router.patch('/updateTodo/:update_id',updateTodo);

// get all todos
router.get('/getAllTodos/:user_id',getAllTodos);

export default router;