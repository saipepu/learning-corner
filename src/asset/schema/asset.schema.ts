import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from "mongoose";

@Schema({
  timestamps: true,
})
export class Asset extends Document {
  @ApiProperty({ example: 'Asset name', description: 'Asset name' })
  @Prop({ required: true })
  name: string;

  @ApiProperty({ example: 'http://image.com', description: 'Asset photol url' })
  @Prop({ required: true })
  photo: string;

  @ApiProperty({ example: 10, description: 'Asset point' })
  @Prop({ required: true })
  point: number;
}

export const AssetSchema = SchemaFactory.createForClass(Asset);