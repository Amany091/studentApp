import { Component } from '@angular/core';
import { Meeting } from 'src/app/Models/courses';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss']
})
export class MeetingsComponent {
  meeting: Meeting[] ;
  constructor(){
    this.meeting = [
      { lecnumber: 1 , time: 12-10}
    ]
  }
}
