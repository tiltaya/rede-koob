import { Prisma } from "@prisma/client";
import { IsEmail, IsOptional, IsString } from "class-validator";

export class CreateUserDto implements Prisma.UsersCreateInput {
    @IsString()
    name: string;

    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    birthdate: string;

    @IsString()
    @IsOptional()
    bio?: string;
}