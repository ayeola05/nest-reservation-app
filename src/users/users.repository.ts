import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateUserDto } from "./dto/create-user.dto";
import { User, UserDocument } from "./schemas/user.schema";

@Injectable()
export class UsersRepository {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>){}

    async create(createUserDto: CreateUserDto): Promise<User>{
        const newUser = new this.userModel(createUserDto)
        return await newUser.save()
    }

    async findOne(username: string): Promise<User | undefined>{
        const user = await this.userModel.findOne({email: username})
        console.log(username)
        console.log(user)
        return user
    }
}