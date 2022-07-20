export enum TYPE {
  NORMAL = "normal",
  ADMIN = "evento",
}

export default class Post {
  constructor(
    private id: string,
    private photo: string,
    private description: string,
    private creation_date: string,
    private type: TYPE,
    private user_id: string 
  ) {}
}

export interface InputCreatePostDTO {
  photo: string;
  description: string;
  type: TYPE;
  token: string | undefined
}

export interface InputSelectPostDTO {
  id: string;
  token: string | undefined;
}

export interface FindByIdResponse {
  id: string;
  photo: string;
  description: string;
  creation_date: string;
  type: TYPE;
  user_id: string;
}
