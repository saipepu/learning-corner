import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class UpdateScoreDto {
  @ApiProperty({ example: 10, description: 'User score' })
  @IsNotEmpty()
  @IsNumber()
  readonly point: number;

  @ApiProperty({ example: 10, description: 'User experience point' })
  @IsNotEmpty()
  @IsNumber()
  readonly exp: number;
}