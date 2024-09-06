import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class SignUpDto {
  @ApiProperty({ example: 'John', description: 'User Name' })
  @IsNotEmpty()
  @IsString()
  readonly name: string

  @ApiProperty({ example: 'John@gmail.com', description: 'Last Name' })
  @IsNotEmpty()
  @IsEmail({}, { message: 'Please enter correct email.'})
  readonly email: string

  @ApiProperty({ example: 'password', description: 'Password' })
  @IsNotEmpty()
  @IsString()
  readonly password: string
}