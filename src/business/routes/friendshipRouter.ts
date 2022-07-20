import { Router } from "express";
import FriendshipController from "../../controller/FriendshipController";
import FriendshipData from "../../data/FriendshipData";
import { Authenticator } from "../../services/Authenticator";
import IdGenerator from "../../services/IdGenerator";
import FriendshipBusiness from "../FriendshipBusiness";

export const friendshipRouter = Router();

const friendshipController = new FriendshipController(
  new FriendshipBusiness(
    new FriendshipData(),
    new IdGenerator(),
    new Authenticator()
  )
);

friendshipRouter.post("/create", friendshipController.createFriendship);
