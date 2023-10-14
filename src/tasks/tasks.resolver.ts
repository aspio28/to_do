import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';
import { createTaskDto, updateTaskDto } from './dto/task.dto';
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
  @Mutation(() => Task)
  updateTask(@Args('updateInput') updateInput: updateTaskDto) {
    return this.taskService.updateTask(updateInput.id, updateInput);
  }
  @Mutation(() => Boolean)
  async deleteTask(@Args('id', { type: () => Int }) id: number) {
    return await this.taskService.deleteTask(id);
  }
}
