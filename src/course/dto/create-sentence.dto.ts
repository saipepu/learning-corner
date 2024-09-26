import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";
import { Content } from "../schema/sentence.schema";

export class CreateSentenceDto {
  @ApiProperty({ example: 'Sentence speaker', description: 'Sentence speaker' })
  @IsNotEmpty()
  readonly speaker: string;

  @ApiProperty({ example: 'Sentence content', description: 'Sentence content' })
  @IsNotEmpty()
  readonly content: [Content];

  @ApiProperty({ example: 'http://audio.com', description: 'Sentence audio url' })
  @IsOptional()
  readonly audioFile: string;
}