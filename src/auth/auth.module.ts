import { forwardRef, Module } from '@nestjs/common';
import "dotenv/config"
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  exports: [AuthService],
  imports:[
    forwardRef(() => UsersModule), 
    PassportModule, 
    JwtModule.register({
    secret: process.env.JWT_SECRET,
    // signOptions: {expiresIn: "100s"}
  })],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy]
})
export class AuthModule {}
