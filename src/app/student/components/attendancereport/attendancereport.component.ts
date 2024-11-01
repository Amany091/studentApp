import { Component, OnInit } from '@angular/core';
interface Attendance{
  id:number
  code:number
  status:string
}
@Component({
  selector: 'app-attendancereport',
  templateUrl: './attendancereport.component.html',
  styleUrls: ['./attendancereport.component.scss']
})
export class AttendancereportComponent implements OnInit{
  lecAttendance:boolean = true;
  secAttendance:boolean = false;

  attendancereport:Attendance[]=[
    { id: 1 , code:20912019200654, status: "present"},
    { id: 2 , code:20912019200654, status: "absent"},
   ]
   attendancesecreport:Attendance[]=[
    { id:1, code:20912019487, status:"present" },
    { id:2, code:20912019487, status:"present" },
   ]
ngOnInit(): void {

}
 displayAttendance(){
  this.lecAttendance = !this.lecAttendance;
  this.secAttendance= !this.secAttendance
 }



}
