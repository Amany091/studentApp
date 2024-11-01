import { Component } from '@angular/core';
import { tables } from 'src/app/Models/courses';

interface Addtable {
  doctorname:string
  location:any
}

@Component({
  selector: 'app-addtable',
  templateUrl: './addtable.component.html',
  styleUrls: ['./addtable.component.scss']
})
export class AddtableComponent {
  Timetable: tables[];
  subjects:string[] = ['Android', 'DigitalSignal']
  daystable : string[] = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'wednesday', 'Thursday']

  dropdownlist:boolean = false;
  overlay:boolean = false;

  time  = new Date(2023, 12, 2);
  location:any ;


  constructor(){
    this.Timetable =[
      {id : 1, Dep: 'IT202', coursename: 'Design And Algorith', time: "10:20", docname: 'Dr.Ehab', location : 'hall2'},
      {id : 2, Dep: 'IT202', coursename: 'Android', time: "9:00", docname: 'Dr.Ehab', location : 'hall4'},
      {id : 3, Dep: 'IT202', coursename: 'Cloud And Computing', time: "10:30", docname: 'Dr.Ehab', location : 'hall5'},
      {id : 4, Dep: 'IT202', coursename: 'Artificial Iintellegence', time: "12:00", docname: 'Dr.Ehab', location : 'hall1'},
    ]
  };
  createTable(){
    this.overlay = !this.overlay ;
  }
  dropdownList(){
    this.dropdownlist = !this.dropdownlist;
  }

  table:Addtable[]=[
    { doctorname: 'Dr Ehab', location:"hall1" }
  ]
}
