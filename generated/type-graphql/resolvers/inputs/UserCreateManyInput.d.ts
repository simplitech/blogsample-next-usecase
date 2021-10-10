export declare class UserCreateManyInput {
    id?: number | undefined;
    createdAt?: Date | undefined;
    email: string;
    password?: string | undefined;
    name?: string | undefined;
    avatarUrl?: string | undefined;
    role?: "USER" | "ADMIN" | undefined;
}
