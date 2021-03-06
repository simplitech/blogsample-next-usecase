import { UserCreateNestedOneWithoutPostsInput } from "../inputs/UserCreateNestedOneWithoutPostsInput";
export declare class PostCreateInput {
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    published?: boolean | undefined;
    title: string;
    body?: string | undefined;
    bannerUrl?: string | undefined;
    author?: UserCreateNestedOneWithoutPostsInput | undefined;
}
