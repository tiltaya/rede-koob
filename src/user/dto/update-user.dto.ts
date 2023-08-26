import { CreateUserDto } from './create-user.dto';
import { IsString, IsOptional, IsEmail } from 'class-validator';

export class UpdateUserDto extends CreateUserDto {
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
