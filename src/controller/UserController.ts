import { Request, Response } from "express";
import UserBusiness from "../business/UserBusiness";
import { InputLoginDTO } from "../model/User";
import { InputSignupDTO } from "../model/User";

export default class UserController {
    constructor(
        private userBusiness:UserBusiness
    ){}
  signup = async (req: Request, res: Response) => {

    const input: InputSignupDTO = {
      name: req.body.name,
      email:req.body.email,
      password:req.body.password
    };
    try {
        const token = await this.userBusiness.signup(input)
        res.status(201).send({message:"User registered successfully", token})
    } catch (error) {
        if(error instanceof Error){
            return res.status(400).send(error.message)
        }
        res.status(500).send("error in signup")
    }
  };
   login = async (req:Request, res:Response) =>{

    const input: InputLoginDTO = {
        email: req.body.email,
        password:req.body.password
    }
    try {
        const token = await this.userBusiness.login(input)
        res.status(200).send({message:"post created successfully", token})
    } catch (error) {
        if(error instanceof Error){
            return res.status(400).send(error.message)
        }
        res.status(500).send("error in login")
    }
   }
}
