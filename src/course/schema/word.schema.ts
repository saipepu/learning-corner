import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema({
  timestamps: true,
})
export class Word extends Document {
  @ApiProperty({ example: 'Word content', description: 'Word content' })
  @Prop({ required: true })
  content: string;

  @ApiProperty({ example: 'Word translation', description: 'Word translation' })
  @Prop({ required: true })
  translation: string;

  @ApiProperty({ example: 'Word examples', description: 'Word examples' })
  @Prop({ type: [String], default: [] })
  examples: string[];
}

export const WordSchema = SchemaFactory.createForClass(Word);