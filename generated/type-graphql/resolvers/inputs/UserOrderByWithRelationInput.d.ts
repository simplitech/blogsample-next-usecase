import { PostOrderByRelationAggregateInput } from "../inputs/PostOrderByRelationAggregateInput";
export declare class UserOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    password?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    role?: "asc" | "desc" | undefined;
    posts?: PostOrderByRelationAggregateInput | undefined;
}
