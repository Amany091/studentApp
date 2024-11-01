import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {

count = 10 ;

ngOnInit(): void {

}
  move(event1:any,event2:any,event3:any,event4:any){
    var length = event3.value.length;
    var maxlength = event3.getAttribute('maxlength')
    if(length == maxlength){
      if(event4 != "") {
      event4.focus();
      }
    }
    if(event1.key === 'Backspace'){
      if(event2 != maxlength){
        event2.focus();
      }
    }
  }
  countdown(count:number){
    if(  this.count !== 0) {
      setTimeout(() => {
      return this.count -- ;
      }, 1000);
    }

  }
}
