import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { Quiz } from "../schema/quiz.schema";

export class CreateCourseDto {
  @ApiProperty({ example: 'Course title', description: 'Course title' })
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @ApiProperty({ example: 'Course description', description: 'Course description' })
  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @ApiProperty({ example: 'http://image.com', description: 'Course photol url' })
  @IsNotEmpty()
  @IsString()
  readonly photo: string;

  // youtube url
  @ApiProperty({ example: 'http://youtube.com', description: 'Course video url' })
  @IsOptional()
  @IsString()
  readonly youtubeLink: string;

  @ApiProperty({ example: 100, description: 'Course experience point' })
  @IsNotEmpty()
  @IsNumber()
  readonly exp: number;

  @ApiProperty({ example: 'Beginner', description: 'Course difficulty' })
  @IsNotEmpty()
  @IsString()
  readonly difficulty: string;

  @ApiProperty({ example: 'Course quizzes', description: 'Course quizzes' })
  @IsOptional()
  readonly quizzes: Quiz[];

  @ApiProperty({ example: 'Course script', description: 'Course script' })
  @IsOptional()
  readonly script: Sentence[];
}