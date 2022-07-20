import User from "../model/User";
import { FindByEmailResponse } from "../model/User";
import {BaseDatabase} from "./BaseDatabase";

export default class UserData extends BaseDatabase {
   protected TABLE_NAME = "labook_users";

  insert = async(user:User) =>{
    try {
        await UserData.connection(this.TABLE_NAME)
        .insert(user)
    } catch (error) {
        if (error instanceof Error){
            throw new Error(error.message)
        }else{
            throw new Error("bank error")
        }
        
    }
  }

  findByEmail = async (email: string) => {
    try {
      const queryResult:FindByEmailResponse = await UserData.connection(this.TABLE_NAME)
        .select()
        .where({ email });
      return queryResult[0];
    } catch (error) {
        throw new Error("User error fetch")
    }
  };
}
