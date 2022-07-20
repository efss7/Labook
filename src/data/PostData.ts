import Post from "../model/Post";
import { FindByIdResponse } from "../model/Post";
import { BaseDatabase } from "./BaseDatabase";

export default class PostData extends BaseDatabase {
  protected TABLE_NAME = "labook_post";

  insert = async (post: Post) => {
    try {
      await PostData.connection(this.TABLE_NAME)
      .insert(post);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("bank error");
      }
    }
  };
  selectById = async (id: string):Promise<FindByIdResponse> => {
    try {
    const result = await PostData.connection(this.TABLE_NAME)
        .select("*")
        .where("id", "=", id);
    const post:FindByIdResponse = {
        id:result[0].id,
        photo:result[0].photo,
        description:result[0].description,
        creation_date:result[0].creation_date,
        type: result[0].type,
        user_id:result[0].user_id
    } 
    return post
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("bank error");
      }
    }
  };
}
