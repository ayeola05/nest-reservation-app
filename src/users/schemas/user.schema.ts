import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from "mongoose"
import * as bcrypt from "bcrypt"


export type UserDocument = User & Document;

@Schema()

export class User {

    @Prop({required: true})
    firstName: string

    @Prop({required: true})
    lastName: string

    @Prop()
    age: number

    @Prop({required: true, unique: true})
    email: string

    @Prop({required: true})
    password: string
}


export const UserSchema = SchemaFactory.createForClass(User)

UserSchema.pre("save", async function (next) {
    const user = this;
  
    if (user.isModified("password")) {
      user.password = await bcrypt.hash(user.password, 10);
    }
  
    next();
  });