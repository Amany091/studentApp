import { Router } from '@angular/router';
import { Component, HostListener } from '@angular/core';
import { tables } from 'src/app/Models/courses';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})
export class CreateTableComponent {
  Timetable: tables[];
  subjects:string[] = ['Android', 'DigitalSignal']

  constructor(private router:Router){
    this.Timetable =[
      {id : 1, Dep: 'IT202', coursename: 'Design And Algorith', time: "10:20", docname: 'Dr.Ehab', location : 'hall2'},
      {id : 2, Dep: 'IT202', coursename: 'Android', time: "9:00", docname: 'Dr.Ehab', location : 'hall4'},
      {id : 3, Dep: 'IT202', coursename: 'Cloud And Computing', time: "10:30", docname: 'Dr.Ehab', location : 'hall5'},
      {id : 4, Dep: 'IT202', coursename: 'Artificial Iintellegence', time: "12:00", docname: 'Dr.Ehab', location : 'hall1'},
    ]
  };

  addscedule(){
    this.router.navigate(['/addscedule'])
  }

}
