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
    if (changeTask) {
      this.taskRep.merge(changeTask, updatedFields);
      return await this.taskRep.save(changeTask);
    } else {
      throw new Error('Task not found');
    }
  }
  async deleteTask(id: number) {
    const deleteResult = await this.taskRep.delete(id);
    return deleteResult.affected == 1;
  }
}
