import { Request, Response } from "express";
import FriendshipBusiness from "../business/FriendshipBusiness";
import { InputCreateFriendshipDTO } from "../model/Friendship";

export default class FriendshipController {
  constructor(private friendshipBusiness: FriendshipBusiness) {}
  createFriendship = async (req: Request, res: Response) => {
    const input: InputCreateFriendshipDTO = {
      id_add: req.body.id_add,
      token: req.headers.authorization,
    };
    try {
      await this.friendshipBusiness.createFriendship(input);
      res.status(201).send({ message: "friendship created successfully" });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send(error.message);
      }
      res.status(500).send("error in createFriendship");
    }
  };
}
