import { PostCreateNestedManyWithoutAuthorInput } from "../inputs/PostCreateNestedManyWithoutAuthorInput";
export declare class UserCreateInput {
    createdAt?: Date | undefined;
    email: string;
    password?: string | undefined;
    name?: string | undefined;
    avatarUrl?: string | undefined;
    role?: "USER" | "ADMIN" | undefined;
    posts?: PostCreateNestedManyWithoutAuthorInput | undefined;
}
