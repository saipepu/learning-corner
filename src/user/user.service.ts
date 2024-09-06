import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Query } from 'express-serve-static-core';
import { User } from './schema/user.schema';

@Injectable()
export class UserService {

  constructor(
    @InjectModel(User.name) private userModel: Model<User>
  ) {}

  async create(createUserDto: CreateUserDto) : Promise<User>{
    const newUser = new this.userModel(createUserDto)
    return newUser.save();
  }

  async findAll() {
    return await this.userModel.find();
  }

  // search by query
  async findOne(query?: Query): Promise<User> {
    return this.userModel.findOne(query) // find all users by query
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
