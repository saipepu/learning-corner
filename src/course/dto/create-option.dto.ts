import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateOptionDto {
  @ApiProperty({ example: 'Option content', description: 'Option content' })
  @IsNotEmpty()
  @IsString()
  readonly content: string;

  @ApiProperty({ example: 'Option is correct', description: 'Option is correct' })
  @IsNotEmpty()
  @IsBoolean()
  readonly isCorrect: boolean;

  @ApiProperty({ example: 'http://image.com', description: 'Option photol url' })
  @IsOptional()
  readonly photo: string;
}