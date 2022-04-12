import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";

import authRouter from "./routes/auth.js";
import todoRouter from "./routes/todos.js";

dotenv.config();

const app = express();
const PORT  = process.env.PORT || 8000;

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

// routing middlewares
app.use('/api',authRouter);

// todos middlewares
app.use('/api/todos/',todoRouter);

// mongoose connection
mongoose.connect(process.env.MONGO_URL).then(
    ()=>{
        console.log('database connection successfully!');
        app.listen(PORT,()=>console.log('listening on port,',PORT))
});


