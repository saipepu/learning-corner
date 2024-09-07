import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@Schema({
  timestamps: true,
})
export class Option extends Document {
  @ApiProperty({ example: 'Option content', description: 'Option content' })
  @Prop({ required: true })
  content: string;

  @ApiProperty({ example: 'Option is correct', description: 'Option is correct' })
  @Prop({ required: true })
  isCorrect: boolean;

  // photo
  @ApiProperty({ example: 'http://image.com', description: 'Option photol url' })
  @Prop({ required: true })
  photo: string;
}

export const OptionSchema = SchemaFactory.createForClass(Option);
