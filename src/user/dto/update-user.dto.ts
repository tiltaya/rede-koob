import { CreateUserDto } from './create-user.dto';
import { IsString, IsOptional } from 'class-validator';

export class UpdateUserDto extends CreateUserDto {
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
