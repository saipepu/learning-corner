import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
import { Option } from './option.schema';
import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';

@Schema({
  timestamps: true,
})
export class Quiz extends Document {
  @ApiProperty({ example: 'Quiz question', description: 'Quiz question' })
  @Prop({ required: true })
  question: string;

  @ApiProperty({ example: 'http://image.com', description: 'Quiz photol url' })
  @Prop()
  photo: string;

  @ApiProperty({ example: 'Quiz options', description: 'Quiz options' })
  @Prop({ type: [Option], default: [] })
  options: Option[];

  @ApiProperty({ example: 10, description: 'Quiz point' })
  @Prop({ required: true })
  point: number;
}

export const QuizSchema = SchemaFactory.createForClass(Quiz);
