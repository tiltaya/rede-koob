import { Controller, Get, Post, Body, Patch, Param, Delete, Put, HttpException, HttpStatus } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  async create(@Body() createPostDto: CreatePostDto) {
    try {
      return await this.postService.create(createPostDto);

    } catch (error) {
      throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST)
    }
  }

  @Get()
  findAll() {
    return this.postService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const getPostById = await this.postService.findOne(+id);

    if (!getPostById) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND)
    }

    return getPostById
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    try {
      return await this.postService.update(+id, updatePostDto);

    } catch (error) {
      throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST)
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.postService.remove(+id);
      
    } catch (error) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND)
    }
  }
}
