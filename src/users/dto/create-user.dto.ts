import { IsEmail, IsInt, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    @IsString()
    lastName: string;
    
    @IsInt()
    age: number;

    @IsEmail()
    email: string

    @MinLength(5)
    password: string
}
