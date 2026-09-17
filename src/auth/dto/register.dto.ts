import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail({}, { message: 'invalid email format' })
  email: string;

  @IsString()
  @MinLength(8, { message: 'password must be at least 8 characters long' })
  password: string;
}
