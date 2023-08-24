import { Prisma } from "@prisma/client";

export class Post implements Prisma.PostsUncheckedCreateInput {
    id?: number;
    content: string;
    userId: number;
    createdAt?: string | Date;
}