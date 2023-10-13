import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';
@ObjectType()
@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;
  @Column({ type: 'text' })
  @Field()
  title: string;
  @Column({ type: 'text' })
  @Field()
  description: string;
  @Column({ default: false })
  @Field({ defaultValue: false })
  completed: boolean;
}
