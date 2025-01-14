import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialsDto {
//   @MinLength(4)
  @IsString()
  @MaxLength(20)
  username: string;

  @IsString()
//   @MinLength(8)
  @MaxLength(32)
//   @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
//     message: 'Password is too week.',
//   })
  password: string;
}
