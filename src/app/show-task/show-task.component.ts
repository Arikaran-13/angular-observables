import { Component } from "@angular/core";
import { TaskService } from "../Service/task.service";

@Component({
    selector: "show-task",
    templateUrl: "./show-task.component.html",
    styleUrls: ["./show-task.component.css"]
})
export class ShowTaskComponent{
    
    tasks:string[]=[];

    constructor(private taskService:TaskService){

    }
    
    ngAfterViewInit(){
        this.tasks = this.taskService.getAllTask();
    }

}