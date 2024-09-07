import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

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

  @ApiProperty({ example: 100, description: 'Course experience point' })
  @IsNotEmpty()
  @IsNumber()
  readonly exp: number;

  @ApiProperty({ example: 'Beginner', description: 'Course difficulty' })
  @IsNotEmpty()
  @IsString()
  readonly difficulty: string;
}