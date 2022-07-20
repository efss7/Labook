import PostData from "../data/PostData";
import Post from "../model/Post";
import { Authenticator } from "../services/Authenticator";
import IdGenerator from "../services/IdGenerator";
import { InputCreatePostDTO } from "../model/Post";
import { InputSelectPostDTO } from "../model/Post";
import { NotFound } from "./errors/NotFound";

export default class PostBusiness {
  constructor(
    private postData: PostData,
    private idGenerator: IdGenerator,
    private authenticator: Authenticator
  ) {}
  createPost = async (input: InputCreatePostDTO) => {
    const { photo, description, type } = input;
    if (!photo || !description || !type) {
      throw new Error("invalid fields");
    }

    const id = this.idGenerator.generateId();
    const creation_date = new Date().toISOString().slice(0, 10);
    const tokenData = this.authenticator.getTokenData(input.token);
    const post = new Post(
      id,
      photo,
      description,
      creation_date,
      type,
      tokenData.id
    );
    await this.postData.insert(post);
  };
  selectPost = async (input:InputSelectPostDTO) => {
    const tokenData = this.authenticator.getTokenData(input.token);
    const { id, token } = input;
    if (!id || !token) {
      throw new Error("invalid fields");
    }
    const post = await this.postData.selectById(id);
    if (!post) {
      throw new NotFound("Post not found");
    }

    const reverteDate = new Date(post.creation_date)
      .toISOString()
      .slice(0, 10)
      .split("-")
      .reverse()
      .join("/");

    post.creation_date = reverteDate;

    return post
  };
}
