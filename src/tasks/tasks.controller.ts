import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Patch,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { createTaskDto, updateTaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}
  @Get()
  returnTasks() {
    return this.taskService.getTasks();
  }
  @Post()
  creteTask(@Body() newTask: createTaskDto) {
    return this.taskService.createTask(newTask);
  }
  @Delete(':id')
  deleteTask(@Param('id') id: number) {
    if (this.taskService.deleteTask(id)) {
      return 'Eliminated';
    } else {
      return 'The ID does not exist';
    }
  }
  @Patch(':id')
  updateTask(@Param('id') id: number, @Body() updatedFields: updateTaskDto) {
    return this.taskService.updateTask(id, updatedFields);
  }
}
