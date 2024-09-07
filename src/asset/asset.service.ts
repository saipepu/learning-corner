import { Injectable } from '@nestjs/common';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';
import { Query } from 'express-serve-static-core';
import { InjectModel } from '@nestjs/mongoose';
import { Asset } from './schema/asset.schema';
import { Model } from 'mongoose';

@Injectable()
export class AssetService {

  constructor(
    @InjectModel(Asset.name) private assetModel: Model<Asset>
  ) {}

  async create(createAssetDto: CreateAssetDto) {
    const newAsset =  await this.assetModel.create(createAssetDto);
    return newAsset.save();
  }

  async findAll(query?: Query) {
    return await this.assetModel.find(query);
  }

  async findOne(id: string) {
    return await this.assetModel.findById(id);
  }

  update(id: number, updateAssetDto: UpdateAssetDto) {
    return `This action updates a #${id} asset`;
  }

  remove(id: number) {
    return `This action removes a #${id} asset`;
  }
}
