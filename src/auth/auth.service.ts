import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/schemas/user.schema';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from "bcrypt"

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
    ){
    
  }

  async validateUser (username: string, password: string){
    const user = await this.usersService.findOne(username)

    if(user){
      const matched = await bcrypt.compare(password, user.password)
      if(matched){
        return user
      }
    }

    return null
  }

  async login(user: any){
    const payload = {email: user.email, sub: user._id};

    return {
      access_token: this.jwtService.sign(payload)
    }
  }

}
