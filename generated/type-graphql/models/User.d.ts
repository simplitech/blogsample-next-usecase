import { Post } from "../models/Post";
import { UserCount } from "../resolvers/outputs/UserCount";
export declare class User {
    id: number;
    createdAt: Date;
    email: string;
    password?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    role: "USER" | "ADMIN";
    posts?: Post[];
    _count?: UserCount | null;
}
