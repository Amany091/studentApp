import { Component } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class StudentAttendanceComponent {
  Courses:Data[];
  constructor(){
    this.Courses = [
      {id: 1, coursename: 'Android'},
      {id:2, coursename: 'Digital'}
    ]
  }
}
