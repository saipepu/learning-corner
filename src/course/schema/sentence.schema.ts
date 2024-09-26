import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Word } from './word.schema';

export class Content {
  @ApiProperty({ example: 'Sentence content', description: 'Sentence content' })
  English: string;

  @ApiProperty({ example: 'Sentence translation', description: 'Sentence translation' })
  Roman: string;

  @ApiProperty({ example: 'Sentence translation', description: 'Sentence translation' })
  Thai: string;
}

@Schema({
  timestamps: true,
})
export class Sentence extends Document {
  @ApiProperty({ example: 'Sentence speaker', description: 'Sentence speaker' })
  @Prop({ required: true })
  speaker: string;

  @ApiProperty({ example: 'Sentence content', description: 'Sentence content' })
  @Prop({ required: true })
  content: Content;

  @ApiProperty({ example: 'http://audio.com', description: 'Sentence audio url' })
  @Prop({ required: true })
  audioFile: string;

  @ApiProperty({ example: 'Sentence words', description: 'Sentence words' })
  @Prop({ type: [Word], default: [] })
  words: Word[];
}

export const SentenceSchema = SchemaFactory.createForClass(Sentence);