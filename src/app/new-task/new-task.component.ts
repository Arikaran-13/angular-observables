import { Component, ElementRef, ViewChild } from "@angular/core";
import { TaskService } from "../Service/task.service";
@Component({
    selector: "new-task",
    templateUrl: "./new-task.component.html",
    styleUrls: ["./new-task.component.css"]
})
export class NewTaskComponent{
     
    @ViewChild("iptEl")
    inputEl:ElementRef;

    constructor(private taskService:TaskService){

    }
    createNewTask():void{
      this.taskService.createTask(this.inputEl.nativeElement.value);
    }
}