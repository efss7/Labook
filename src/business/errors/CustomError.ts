export class CustomError extends Error {
  protected statusCode: number;

  constructor(statusCode: number = 400, message: string) {
      super(message);
      this.statusCode = statusCode;
  }
}
