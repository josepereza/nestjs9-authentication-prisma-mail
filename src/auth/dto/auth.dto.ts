import {
  IsEmail,
  IsString,
  IsNotEmpty,
  Matches,
  MinLength,
  IsOptional,
} from 'class-validator';
import { Match } from '../decorator';

export class AuthDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;

  @IsString()
  @IsNotEmpty()
  @Match('password', { message: 'confirm password has to match password' })
  confirmPassword: string;

  @IsOptional()
  fullName: string;
}
