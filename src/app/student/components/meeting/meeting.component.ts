import { Component } from '@angular/core';
import { Meeting } from 'src/app/Models/courses';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss']
})
export class MeetingComponent {
  meeting: Meeting[] ;
  constructor(){
    this.meeting = [
      { lecnumber: 1 , time: 12-10}
    ]
  }
}
