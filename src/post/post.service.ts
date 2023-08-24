import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService){}

  create(createPostDto: CreatePostDto) {
    return this.prisma.posts.create({
      data: {
        content: createPostDto.content,
        userId: createPostDto.userId,
      }
    })
  }

  findAll() {
    return this.prisma.posts.findMany({
      include: {User: true}
    });
  }

  findOne(id: number) {
    return this.prisma.posts.findUnique({
      where: {id}
    });
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return this.prisma.posts.update({
      data: {
        content: updatePostDto.content,
        userId: updatePostDto.userId
      }, where: {id}
    });
  }

  remove(id: number) {
    return this.prisma.posts.delete({
      where: {id}
    });
  }
}
