import { Prisma } from "@prisma/client";
import { IsOptional, IsString } from "class-validator";

export class CreateUserDto implements Prisma.UsersCreateInput {
    @IsString()
    name: string;
    @IsString()
    email: string;
    @IsString()
    birthdate: string;
    @IsString()
    @IsOptional()
    bio?: string;
}
