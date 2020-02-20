import IUser from "./IUser";

export interface IPost {
    submitted:string;
    post_text:string;
    url: string;
    userId: IUser
}