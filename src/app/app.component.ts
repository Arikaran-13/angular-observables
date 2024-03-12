import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { map } from 'rxjs';
import { fromEvent } from 'rxjs';
import { filter } from 'rxjs';
import { of } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-observables';
  data: number[]=[];

  @ViewChild("buttonEl")
  buttonElem:ElementRef;

  //Observable => .next() will emit the data or stream of data only if any subcriber() is present 
  myObservable = new Observable((observer)=>{ // stream of data 
    setTimeout(()=>{observer.next(1)},2000);
    setTimeout(()=>{observer.next(2)},2000);
    setTimeout(()=>{observer.next(3)},2000);
    setTimeout(()=>{observer.next(4)},2000);
    setTimeout(()=>{observer.next(5)},3000);
    setTimeout(()=>{observer.next(8)},3000);
    setTimeout(()=>{observer.next(6)},3000);
  });

  //Observer => subcriber for the emitted data
  getDataFromObservable():void{ //Onclick
    this.myObservable.subscribe(
      (val:number)=>{   // next
        this.data.push(val);
      } ,
      (err)=>{     // when some error thrown by Observable we can handle here
        alert(err);
      },
      ()=>{   // After completetion of Data stream this logic will be executed
        alert("Completed")
      }
    )
  }

  myObservable2 = of("hello","angular");
  myObservable3 = of(1,2,3,4,5);

  ngOnInit(){
    let newOb = this.myObservable.pipe(
       filter((val:number)=> val%2===0),
       map((val)=> val+2)
    ).subscribe((next)=>{console.log(next)}, (err)=>{console.log(err)} , ()=>{console.log("Completed")});
  }
  
  
  ngAfterViewChecked(){
    console.log("From ng After view checked");
    let myOb3 = fromEvent(this.buttonElem.nativeElement,'click');
    myOb3.subscribe((event)=>{console.log(event)})
  }
}
