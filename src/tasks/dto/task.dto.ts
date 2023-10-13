import { Field, InputType, Int } from '@nestjs/graphql';
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
@InputType()
export class updateTaskDto {
  @Field(() => Int)
  id: number;
  @Field({ nullable: true })
  title?: string;
  @Field({ nullable: true })
  description?: string;
  @Field({ nullable: true })
  completed?: boolean;
}
