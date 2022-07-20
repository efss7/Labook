export default class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string
  ) {}
}

export interface InputSignupDTO{
  name: string;
  email: string;
  password: string;
};
export interface InputLoginDTO {
  email: string;
  password: string;
};

export type FindByEmailResponse = {
  id: string;
  name: string;
  email: string;
  password: string;
}[];
