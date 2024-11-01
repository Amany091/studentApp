import { Component } from '@angular/core';
import { CourseSidebar } from '../Models/course-sidebar';

@Component({
  selector: 'app-coursesidebar',
  templateUrl: './coursesidebar.component.html',
  styleUrls: ['./coursesidebar.component.scss']
})
export class CoursesidebarComponent {
  course : CourseSidebar[] ;
  constructor(){
   this.course = [
    { coursename : 'Android', doctorname: 'Doctor Ehab' }
   ]

  }
}
