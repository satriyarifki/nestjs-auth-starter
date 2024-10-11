import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { Public } from './public-strategy';
import * as bcrypt from 'bcrypt';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  saltOrRounds: number = 10;
  constructor(private authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  @ApiOperation({ summary: 'User Login' })
  @ApiResponse({
    status: 200,
    description: 'The record found',
    // type: [CreateUserDto],
  })
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('signup')
  @ApiOperation({ summary: 'User Signup' })
  @ApiResponse({
    status: 200,
    description: 'The record found',
    type: [CreateUserDto],
  })
  async signUp(@Body() signUpDto: Record<string, any>) {
    const hashPass = await bcrypt.hash(signUpDto.password, this.saltOrRounds);
    const payload: CreateUserDto = {
      email: signUpDto.email,
      password: hashPass,
      name: signUpDto.name,
      gender: signUpDto.gender,
      createdat: new Date(),
    };
    return this.authService.signUp(payload);
  }
}
