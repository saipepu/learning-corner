import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AssetService } from './asset.service';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';
import { ApiExtraModels, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Asset } from './schema/asset.schema';
import { ApiNotSuccessResponseHelper, ApiSuccessResponseHelper } from 'src/helpers/swagger.helper';

@ApiExtraModels(Asset)
@ApiTags('Asset')
@Controller('asset')
export class AssetController {
  constructor(private readonly assetService: AssetService) {}

  @ApiResponse(ApiSuccessResponseHelper(Asset.name))
  @ApiResponse(ApiNotSuccessResponseHelper())
  @Post()
  create(@Body() createAssetDto: CreateAssetDto) {
    return this.assetService.create(createAssetDto);
  }

  @ApiResponse(ApiSuccessResponseHelper(Asset.name, 'array'))
  @ApiResponse(ApiNotSuccessResponseHelper())
  @Get()
  findAll() {
    return this.assetService.findAll();
  }

  @ApiResponse(ApiSuccessResponseHelper(Asset.name))
  @ApiResponse(ApiNotSuccessResponseHelper())
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assetService.findOne(id);
  }

  @ApiResponse(ApiSuccessResponseHelper(Asset.name))
  @ApiResponse(ApiNotSuccessResponseHelper())
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAssetDto: UpdateAssetDto) {
    return this.assetService.update(+id, updateAssetDto);
  }

  @ApiResponse(ApiSuccessResponseHelper(Asset.name))
  @ApiResponse(ApiNotSuccessResponseHelper())
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assetService.remove(id);
  }
}
