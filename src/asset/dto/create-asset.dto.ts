import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAssetDto {
  @ApiProperty({ example: 'Asset name', description: 'Asset name' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 'http://image.com', description: 'Asset photol url' })
  @IsNotEmpty()
  @IsString()
  photo: string;

  @ApiProperty({ example: 10, description: 'Asset point' })
  @IsNotEmpty()
  @IsNumber()
  point: number;
}