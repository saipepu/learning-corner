import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiExtraModels, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SignUpDto } from './dto/sign-up.dto';
import { ApiNotSuccessResponseHelper, ApiSuccessResponseHelper } from 'src/helpers/swagger.helper';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpFirebaseDto } from './dto/sign-up-firebase.dto';

@ApiExtraModels(SignUpDto, SignInDto, SignUpFirebaseDto)
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiResponse(ApiSuccessResponseHelper(SignInDto.name))
  @ApiResponse(ApiNotSuccessResponseHelper())
  @Post('signin')
  signin(@Body() body: SignInDto) {
    return this.authService.signin(body);
  }

  @ApiResponse(ApiSuccessResponseHelper(SignUpDto.name))
  @ApiResponse(ApiNotSuccessResponseHelper())
  @Post('signup')
  signUp(@Body() body: SignUpDto) {
    return this.authService.signUp(body);
  }

  @ApiResponse(ApiSuccessResponseHelper(SignInDto.name))
  @ApiResponse(ApiNotSuccessResponseHelper())
  @Post('signin/firebase')
  signInWithFirebaseId(@Body() body: SignUpFirebaseDto) {
    return this.authService.signInWithFirebaseId(body);
  }

}
