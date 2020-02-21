import IUser from "./IUser";

export interface IPost {
    likes: number;
    submitted:string;
    post_text:string;
    url: string;
    userId: IUser
}