import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class SignUpFirebaseDto {
  @ApiProperty({ example: 'John', description: 'User Name' })
  @IsNotEmpty()
  @IsString()
  readonly name: string

  // email
  @ApiProperty({ example: 'john@gmail.com', description: 'User email' })
  @IsNotEmpty()
  @IsString()
  readonly email: string

  // firebase id
  @ApiProperty({ example: 'firebase id', description: 'Firebase id' })
  @IsNotEmpty()
  @IsString()
  readonly firebaseId: string
}