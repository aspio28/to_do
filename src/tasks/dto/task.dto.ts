import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
@InputType()
export class createTaskDto {
  @IsNotEmpty()
  @Field()
  title: string;
  @IsNotEmpty()
  @Field()
  description: string;
}
export class updateTaskDto {
  title?: string;
  description?: string;
  completed?: boolean;
}
