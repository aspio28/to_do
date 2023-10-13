import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';
import { createTaskDto } from './dto/task.dto';
@Resolver()
export class TasksResolver {
  constructor(private taskService: TasksService) {}
  @Query(() => [Task])
  tasks() {
    return this.taskService.getTasks();
  }
  @Mutation(() => Task)
  createTask(@Args('taskInput') taskInput: createTaskDto) {
    return this.taskService.createTask(taskInput);
  }
}
