import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { SignUpDto } from './dto/sign-up.dto';
import * as bcrypt from 'bcryptjs';
import { UserService } from 'src/user/user.service';
import { SignInDto } from './dto/sign-in.dto';
import { JwtService } from '@nestjs/jwt';
import { SignUpFirebaseDto } from './dto/sign-up-firebase.dto';

@Injectable()
export class AuthService {

  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async signin(body: SignInDto): Promise<any>{
    let user: any = await this.userService.findAll({ email: body.email })

    if(!user || user.length === 0) {
      throw new UnauthorizedException('User not found. Please sign up.')
    }

    user = user[0]
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
    let user: any = await this.userService.findAll({ email: body.email })
    console.log(user)

    if(user.length > 0) {
      throw new UnauthorizedException('User already exist. Please login.')
    }

    const hashedPassword = await bcrypt.hash(body.password, 10)
    const newUser = this.userService.create({...body, password: hashedPassword})

    return newUser

  }

  // sign in with firebase id
  async signInWithFirebaseId(body: SignUpFirebaseDto): Promise<any> {
    let user: any = await this.userService.findAll({ email: body.email })

    if(!user || user.length === 0) {
      const hashedPassword = await bcrypt.hash(body.firebaseId, 10)
      const newUser = this.userService.create({...body, password: hashedPassword})
      return newUser
    } else {
      user = user[0]
      let dto = { ...user.toObject() }
      return { ...dto }
    }

  }

}
