import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiExtraModels, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './schema/user.schema';
import { Query as QueryType } from 'express-serve-static-core';
import { UpdateScoreDto } from './dto/update-score.dto';
import { BuyAssetDto } from './dto/buy-asset.dto';
import { ApiNotSuccessResponseHelper, ApiSuccessResponseHelper } from 'src/helpers/swagger.helper';

@ApiExtraModels(User)
@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiResponse(ApiSuccessResponseHelper(User.name))
  @ApiResponse(ApiNotSuccessResponseHelper())
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @ApiResponse(ApiSuccessResponseHelper(User.name, 'array'))
  @ApiResponse(ApiNotSuccessResponseHelper())
  @Get()
  findAll(@Query() query?: QueryType) {
    return this.userService.findAll(query);
  }

  @ApiResponse(ApiSuccessResponseHelper(User.name))
  @ApiResponse(ApiNotSuccessResponseHelper())
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findById(id);
  }

  // ADD SCORE
  @ApiResponse(ApiSuccessResponseHelper(User.name))
  @ApiResponse(ApiNotSuccessResponseHelper())
  @Patch(':id/score')
  updateScore(@Param('id') id: string, @Body() score: UpdateScoreDto) {
    return this.userService.updateScore(id, score);
  }

  // BUY ASSET
  @ApiResponse(ApiSuccessResponseHelper(User.name))
  @ApiResponse(ApiNotSuccessResponseHelper())
  @Patch(':id/buy')
  buyAsset(@Param('id') id: string, @Body() asset: BuyAssetDto) {
    return this.userService.buyAsset(id, asset);
  }

  @ApiResponse(ApiSuccessResponseHelper(User.name))
  @ApiResponse(ApiNotSuccessResponseHelper())
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: any) {
    return this.userService.update(id, updateUserDto);
  }

  @ApiResponse(ApiSuccessResponseHelper(User.name))
  @ApiResponse(ApiNotSuccessResponseHelper())
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }

  @Delete()
  removeAll() {
    return this.userService.removeAll();
  }
}
