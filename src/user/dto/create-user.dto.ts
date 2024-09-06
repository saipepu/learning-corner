import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {

  @ApiProperty({ example: 'user' })
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @ApiProperty({ example: 'user@gmail.com'})
  @IsNotEmpty()
  @IsString()
  readonly email: string;

  @ApiProperty({ example: 'password' })
  @IsNotEmpty()
  @IsString()
  readonly password: string;
  
}