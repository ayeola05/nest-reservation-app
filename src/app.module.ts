import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, MongooseModule.forRoot("mongodb://localhost/new-nestjs-crud")],
  controllers: [],
  providers: [],
})
export class AppModule {}
