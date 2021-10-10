import { User } from "../models/User";
export declare class Post {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    published: boolean;
    title: string;
    body?: string | null;
    bannerUrl?: string | null;
    author?: User | null;
    authorId?: number | null;
}
