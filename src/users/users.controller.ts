import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, HttpException, HttpStatus, BadRequestException,Request, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
import { AuthService } from 'src/auth/auth.service';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService
  ) {}

  @Post("login")
  @UseGuards(LocalAuthGuard)
  login(@Request() req): any{
    return this.authService.login(req.user)
  }

  @Post("signup")
  @UsePipes(ValidationPipe)
  async signUp(@Request() req, @Body() createUserDto: CreateUserDto): Promise<any> {
    try{
      const user = await this.usersService.create(createUserDto);
      if(user) return this.authService.login(user)
      else throw new HttpException("Invalid data", HttpStatus.BAD_REQUEST)
    }catch(e){
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST)
    }

  }

  @Get("profile")
  @UseGuards(JwtAuthGuard)
  getProfile(@Request() req) {
    return req.user
  }
}
