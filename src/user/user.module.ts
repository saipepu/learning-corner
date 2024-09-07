import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schema/user.schema';
import { ConfigModule } from '@nestjs/config';
import { AssetSchema } from 'src/asset/schema/asset.schema';
import { AssetService } from 'src/asset/asset.service';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        { name: 'User', schema: UserSchema },
        { name: 'Asset', schema: AssetSchema },
      ],
    ),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
  ],
  controllers: [UserController],
  providers: [UserService, AssetService],
  exports: [UserService],
})
export class UserModule {}
