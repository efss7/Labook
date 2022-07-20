import Friendship, { DeleteByIdResponse } from "../model/Friendship";
import { BaseDatabase } from "./BaseDatabase";

export default class FriendshipData extends BaseDatabase {
  protected TABLE_NAME = "labook_friendship";

  insert = async (friendship: Friendship) => {
    try {
      await FriendshipData.connection(this.TABLE_NAME)
      .insert(friendship);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("bank error");
      }
    }
  };
  deleteById = async (id: string):Promise<DeleteByIdResponse> => {
    try {
    const result = await FriendshipData.connection(this.TABLE_NAME)
        .delete("*")
        .where("id", "=", id);
    const friendship:DeleteByIdResponse = {
        id:result[0].id,
        id_add:result[0].id_add,
        id_added:result[0].id_added
    } 
    return friendship
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("bank error");
      }
    }
  };
}
