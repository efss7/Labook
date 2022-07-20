import { Router } from "express";
import UserBusiness from "../UserBusiness";
import UserController from "../../controller/UserController";
import UserData from "../../data/UserData";
import IdGenerator from "../../services/IdGenerator";
import { HashManager } from "../../services/HashManager";
import { Authenticator } from "../../services/Authenticator";

export const userRouter = Router();

const userController = new UserController(
  new UserBusiness(
    new UserData(),
    new IdGenerator(),
    new HashManager(),
    new Authenticator()
  )
);

userRouter.post("/signup", userController.signup);
userRouter.post("/login", userController.login);
