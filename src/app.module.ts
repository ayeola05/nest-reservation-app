import { Module } from '@nestjs/common';
import "dotenv/config"
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UsersModule, 
    MongooseModule.forRoot(process.env.MONGODB_URI), 
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
