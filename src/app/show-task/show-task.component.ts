import { Component } from "@angular/core";

@Component({
    selector: "show-task",
    templateUrl: "./show-task.component.html",
    styleUrls: ["./show-task.component.css"]
})
export class ShowTaskComponent{
    
    tasks:string[]=["Task1" , "Task2" , "Task3"];
}