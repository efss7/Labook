import FriendshipData from "../data/FriendshipData";
import Friendship, { InputCreateFriendshipDTO } from "../model/Friendship";
import { Authenticator } from "../services/Authenticator";
import IdGenerator from "../services/IdGenerator";

export default class FriendshipBusiness {
    constructor(
      private friendshipData: FriendshipData,
      private idGenerator: IdGenerator,
      private authenticator: Authenticator
    ) {}
    createFriendship = async (input: InputCreateFriendshipDTO) => {
      const { id_add } = input;
      if (!id_add) {
        throw new Error("invalid field");
      }
      const id = this.idGenerator.generateId();
      const tokenData = this.authenticator.getTokenData(input.token);
      const friendship = new Friendship(
        id,
        id_add,
        tokenData.id
      );
      await this.friendshipData.insert(friendship);
    };}