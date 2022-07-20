import { Router } from "express";
import PostController from "../../controller/PostController";
import PostData from "../../data/PostData";
import { Authenticator } from "../../services/Authenticator";
import IdGenerator from "../../services/IdGenerator";
import PostBusiness from "../PostBusiness";

export const postRouter = Router();

const postController = new PostController(
    new PostBusiness(
      new PostData(),
      new IdGenerator(),
      new Authenticator()
    )
  )

  postRouter.post("/create", postController.createPost)
  postRouter.get("/:id", postController.selectPost)