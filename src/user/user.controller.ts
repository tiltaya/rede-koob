import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    try {
      return this.userService.create(createUserDto);
    } catch (error) {
      throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST)
    }
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.userService.findOne(+id);

    if (!user) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND)
    }

    return user
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const updateUser = await this.userService.update(+id, updateUserDto);

    if(!updateUser) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND)
    }

    return updateUser
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.userService.remove(+id);
      
    } catch (error) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND)
    }
  }
}