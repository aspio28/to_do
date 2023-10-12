import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';
import { updateTaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: '1',
      title: 'madrasahs',
      description: 'sahshshhs',
    },
  ];
  getTasks() {
    return this.tasks;
  }
  createTask(title: string, description: string) {
    const task = {
      id: new Date().toISOString(),
      title,
      description,
    };
    this.tasks.push(task);
  }
  updateTask(id: string, updatedFields: updateTaskDto): Task {
    const task = this.tasks.find((task) => task.id === id);
    const newTask = Object.assign(task, updatedFields);
    this.tasks.map((task) => (task.id === id ? newTask : task));

    return newTask;
  }
  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
