import { Prisma } from "@prisma/client";

export class CreatePostDto implements Prisma.PostsUncheckedCreateInput {
    content: string;
    userId: number;
}