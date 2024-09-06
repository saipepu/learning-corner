import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { SignUpDto } from './dto/sign-up.dto';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';
import { SignInDto } from './dto/sign-in.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async signin(body: SignInDto): Promise<any>{
    const user = await this.userService.findOne({ email: body.email })
    if(!user) {
      throw new UnauthorizedException('User not found. Please sign up.')
    }

    const isPasswordMatch = await bcrypt.compare(body.password, user.password)
    if(!isPasswordMatch) {
      throw new UnauthorizedException('Invalid password. Please try again.')
    }

    const token = this.jwtService.sign({ email: user.email, sub: user.id });

    let dto = { ...user.toObject() }
    return { ...dto , token }
  }

  async signUp(body : SignUpDto): Promise<any> {

    // Check if user already exist
    const user = await this.userService.findOne({ email: body.email })
    if(user) {
      throw new UnauthorizedException('User already exist. Please login.')
    }

    const hashedPassword = await bcrypt.hash(body.password, 10)
    const newUser = this.userService.create({...body, password: hashedPassword})

    return newUser

  }

}
