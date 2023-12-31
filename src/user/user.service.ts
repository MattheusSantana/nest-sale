import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService){}

  create(createUserDto: CreateUserDto) {
    return this.prismaService.user.create({
      data: createUserDto
    }) ;
  }

  findAll() {
    return this.prismaService.user.findMany({
      orderBy: {
        createdAt: 'asc'
      }
    });
  }

  findOne(id: number) {
    return this.prismaService.user.findUniqueOrThrow({
      where: {
        id,
      }
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prismaService.user.update({
      where:{
        id,
      },
      data: updateUserDto
    });
  }

  remove(id: number) {
    return this.prismaService.user.delete({
      where: {
        id
      }
  });
  }
}
