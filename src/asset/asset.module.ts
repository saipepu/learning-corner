import { Module } from '@nestjs/common';
import { AssetService } from './asset.service';
import { AssetController } from './asset.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AssetSchema } from './schema/asset.schema';

@Module({
  imports: [
    MongooseModule.forFeature([ { name: 'Asset', schema: AssetSchema } ]),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    })
  ],
  controllers: [AssetController],
  providers: [AssetService],
})
export class AssetModule {}
