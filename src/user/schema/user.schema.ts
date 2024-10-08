import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from "mongoose";
import { Asset } from "src/asset/schema/asset.schema";
import { Course } from "src/course/schema/course.schema";
import mongoose from 'mongoose';

@Schema({
  timestamps: true,
})
export class User extends Document {
  @ApiProperty({ example: 'User name', description: 'User name' })
  @Prop({ required: true })
  name: string;

  @ApiProperty({ example: 'example@gmail.com', description: 'User email' })
  @Prop({ required: true, unique: true })
  email: string;

  @ApiProperty({ example: 'hashed password', description: 'Received the plain text password and store the hashed version' })
  @Prop({ required: true })
  password: string;

  // point
  @ApiProperty({ example: 100, description: 'User point' })
  @Prop({ required: false, default: 0 })
  point: number;

  // exp
  @ApiProperty({ example: 100, description: 'User experience point' })
  @Prop({ required: false, default: 0 })
  exp: number;

  @ApiProperty({ example: 'course _id', description: 'array of user course' })
  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Course', default: [] })
  courses: Course[];

  // user asset
  @ApiProperty({ example: 'asset _id', description: 'array of user asset' })
  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Asset', default: [] })
  assets: Asset[];
}

export const UserSchema = SchemaFactory.createForClass(User);