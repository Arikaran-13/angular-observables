import { Injectable } from "@angular/core";

@Injectable()
export class TaskService{

    tasks:string[] = ["Task1","Task2","Task3"];

    public createTask(task:string){
      this.tasks.push(task);
    }

    public getAllTask():string[]{
        return this.tasks;
    }
}