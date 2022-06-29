import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, MongooseModule.forRoot("mongodb://localhost/new-nestjs-crud"), AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
