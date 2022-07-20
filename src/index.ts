import { app } from "./controller/app";
import express from "express";
import cors from "cors";
import { postRouter } from "./business/routes/postRouter";
import { userRouter } from "./business/routes/userRouter";
import { friendshipRouter } from "./business/routes/friendshipRouter";


app.use(express.json())
app.use(cors())


app.use("/user", userRouter);
app.use("/post", postRouter)
app.use("/friendship", friendshipRouter)

