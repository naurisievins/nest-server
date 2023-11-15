import { IsNotEmpty, IsString, IsInt, Min, Max } from 'class-validator';
export class CreateUserDTO {
  @IsNotEmpty()
  @IsString()
  @Min(3)
  @Max(30)
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @Min(3)
  @Max(30)
  lastName: string;

  @IsNotEmpty()
  @Min(1)
  @Max(3)
  age: string;

  @IsNotEmpty()
  @IsString()
  @Min(5)
  @Max(100)
  address: string;
}
