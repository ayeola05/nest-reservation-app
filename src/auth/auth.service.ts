import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService){
    
  }

  validateUser = async(username: string, password: string) => {
    const user = await this.usersService.findOne(username)

    if(user && user.password === password){
      return user
    }

    return null
  }

}
