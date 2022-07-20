export default class Friendship{
    constructor(
        private id:string,
        private id_add:string,
        private id_added:string
    ){}
}

export interface InputCreateFriendshipDTO{
    id_add:string;
    token: string | undefined;
}

export interface DeleteByIdResponse{
    id:string;
    id_add:string;
    id_added:string;
}