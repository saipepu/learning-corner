import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { CreateOptionDto } from "./create-option.dto";
import { Option } from "../schema/option.schema";

let exampleOptions = [
  {
    content: 'Option content 1',
    isCorrect: true,
    photo: 'http://image.com'
  },
  {
    content: 'Option content 2',
    isCorrect: false,
    photo: 'http://image.com'
  }
];

export class CreateQuizDto {
  @ApiProperty({ example: 'Quiz question', description: 'Quiz question' })
  @IsNotEmpty()
  @IsString()
  readonly question: string;

  @ApiProperty({ example: 'http://image.com', description: 'Quiz photol url' })
  @IsOptional()
  @IsString()
  readonly photo: string;

  // audio file name
  @ApiProperty({ example: 'http://audio.com', description: 'Quiz audio url' })
  @IsOptional()
  @IsString()
  readonly audioFile: string;

  @ApiProperty({ example: exampleOptions, description: 'Quiz options' })
  @IsNotEmpty()
  @IsArray()
  @Type(() => CreateOptionDto)
  readonly options: Option[];

  @ApiProperty({ example: 10, description: 'Quiz point' })
  @IsNotEmpty()
  @IsNumber()
  readonly point: number;
}
