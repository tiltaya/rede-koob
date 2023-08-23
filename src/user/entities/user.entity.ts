import { Prisma } from "@prisma/client";

export class User implements Prisma.UsersUncheckedCreateInput {
    id?: number;
    name: string;
    email: string;
    birthdate: string;
    bio?: string;
    createdAt?: string | Date;
    Posts?: Prisma.PostsUncheckedCreateNestedManyWithoutUserInput;
}
