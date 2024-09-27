import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Query } from 'express-serve-static-core';
import { User } from './schema/user.schema';
import { UpdateScoreDto } from './dto/update-score.dto';
import { BuyAssetDto } from './dto/buy-asset.dto';
import { AssetService } from 'src/asset/asset.service';

@Injectable()
export class UserService {

  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly assetService: AssetService
  ) {}

  async create(createUserDto: CreateUserDto) : Promise<User>{
    const newUser = new this.userModel(createUserDto)
    return newUser.save();
  }

  async findAll(query?: Query) : Promise<User[]> {
    return await this.userModel.find(query).populate(['courses', 'assets']).exec();
  }

  async findById(id: string): Promise<User> {
    return this.userModel.findById(id)
  }

  async update(id: string, updateUserDto: any) {
    return await this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).populate('courses').exec();
  }

  // ADD SCORE
  async updateScore(id: string, score: UpdateScoreDto) {
    return await this.userModel.findByIdAndUpdate(id, { $inc: { point: score.point, exp: score.exp } }, { new: true }).populate('courses').exec();
  }

  // BUY ASSET
  async buyAsset(id: string, asset: BuyAssetDto) {

    let existingAsset = await this.assetService.findOne(asset.assetId)
    let user = await this.findById(id)

    if(!existingAsset) throw new BadRequestException('Asset not found');
    if(!user) throw new BadRequestException('User not found');
    if(existingAsset.point > user.point) throw new BadRequestException('Insufficient point');

    return await this.userModel.findByIdAndUpdate(id, { $push: { assets: existingAsset }, $inc: { point: -existingAsset.point } }, { new: true }).populate(['courses', 'assets']).exec();
  }

  async remove(id: string) {
    return await this.userModel.findByIdAndDelete(id)
  }

  async removeAll() {
    return await this.userModel.deleteMany().exec()
  }
}
