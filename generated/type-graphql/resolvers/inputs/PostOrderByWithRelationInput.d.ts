import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class PostOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    published?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    body?: "asc" | "desc" | undefined;
    bannerUrl?: "asc" | "desc" | undefined;
    author?: UserOrderByWithRelationInput | undefined;
    authorId?: "asc" | "desc" | undefined;
}
