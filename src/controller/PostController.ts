import { Request, Response } from "express";
import PostBusiness from "../business/PostBusiness";
import { InputCreatePostDTO } from "../model/Post";
import { InputSelectPostDTO } from "../model/Post";

export default class PostController {
  constructor(
    private postBusiness: PostBusiness
    ){}
  createPost = async (req: Request, res: Response) => {
    const input: InputCreatePostDTO = {
      photo: req.body.photo,
      description: req.body.description,
      type:req.body.type,
      token: req.headers.authorization
    };
    try {
      await this.postBusiness.createPost(input);
      res.status(201).send({ message: "post created successfully"});
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send(error.message);
      }
      res.status(500).send("error in createPost");
    }
  };
  selectPost = async (req:Request, res:Response)=>{
    const input: InputSelectPostDTO = {
      id: req.params.id,
      token:req.headers.authorization
    }
    
    try {
      const post = await this.postBusiness.selectPost(input)
      res.status(200).send(post)
    } catch (error:any) {
      res.status(error.statusCode || 400).send(error.message)
    }
}
}
