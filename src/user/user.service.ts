import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService){}

  create(createUserDto: CreateUserDto) {
    return this.prisma.users.create({
      data: {
        name: createUserDto.name,
        email: createUserDto.email,
        birthdate: createUserDto.birthdate,
        bio: createUserDto.bio
      }
    });
  }

  findAll() {
    return this.prisma.users.findMany();
  }

  findOne(id: number) {
    return this.prisma.users.findUnique({
      where: {id} 
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.users.update({
      data: {
        name: updateUserDto.name,
        email: updateUserDto.email,
        birthdate: updateUserDto.birthdate,
        bio: updateUserDto.bio
      }, where: {id}
    })
  }

  remove(id: number) {
    return this.prisma.users.delete({
      where: {id}
    })
  }
}
