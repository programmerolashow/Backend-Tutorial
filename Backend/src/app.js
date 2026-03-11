import express from "express";
// routes imports
import userRouter from './Routes/user.routes.js';
 import postRouter from './Routes/post.routes.js';

const app = express(); //express app creation

app.use(express.json());

// routes declaration
app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter)

// example route: http://localhost:4000/api/v1/users/register

export default app;