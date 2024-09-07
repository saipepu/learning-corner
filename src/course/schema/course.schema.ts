import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Quiz } from "./quiz.schema";
import { Sentence } from "./sentence.schema";
import { Document } from "mongoose";

@Schema({
  timestamps: true,
})
export class Course extends Document {
  @ApiProperty({ example: 'Course title', description: 'Course title' })
  @Prop({ required: true })
  title: string;

  @ApiProperty({ example: 'Course description', description: 'Course description' })
  @Prop({ required: true })
  description: string;

  @ApiProperty({ example: 'http://image.com', description: 'Course photol url' })
  @Prop({ required: true })
  photo: string;

  @ApiProperty({ example: 100, description: 'Course experience point' })
  @Prop({ required: true })
  exp: number;

  @ApiProperty({ example: 'Course difficulty', description: 'Course difficulty' })
  @Prop({ required: true })
  difficulty: string;

  @ApiProperty({ example: 'Course quizzes', description: 'Course quizzes' })
  @Prop({ type: [Quiz], default: [] })
  quizzes: Quiz[];

  @ApiProperty({ example: 'Course script', description: 'Course script' })
  @Prop({ type: [Sentence], default: [] })
  script: Sentence[];
}

export const CourseSchema = SchemaFactory.createForClass(Course);