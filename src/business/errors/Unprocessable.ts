import { CustomError } from "./CustomError";

export class UnprocessableEntities extends CustomError {
  constructor(message: string) {
    super(422, message);
  }
}