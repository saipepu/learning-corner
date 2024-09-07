import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class BuyAssetDto {
  @ApiProperty({ example: '66dcb6d5d58802fb1ebc93ba', description: 'The example value is valid.' })
  @IsNotEmpty()
  @IsString()
  readonly assetId: string;
}