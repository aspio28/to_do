import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';
import { createTaskDto, updateTaskDto } from './dto/task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(@InjectRepository(Task) private taskRep: Repository<Task>) {}
  getTasks() {
    return this.taskRep.find();
  }
  createTask(body: createTaskDto) {
    const newTask = this.taskRep.create(body);
    return this.taskRep.save(newTask);
  }
  async updateTask(id: number, updatedFields: updateTaskDto) {
    const changeTask = await this.taskRep.findOne({ where: { id: id } });
    this.taskRep.merge(changeTask, updatedFields);
    return this.taskRep.save(changeTask);
  }
  async deleteTask(id: number) {
    await this.taskRep.delete(id);
    return true;
  }
}
