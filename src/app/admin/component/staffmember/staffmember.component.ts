import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface AllStaff {
  id:number,
  doctorname:string,
  email:any
}

@Component({
  selector: 'app-staffmember',
  templateUrl: './staffmember.component.html',
  styleUrls: ['./staffmember.component.css']
})
export class StaffmemberComponent {
staffs:AllStaff[]=[
  {id:1, doctorname:"EhabRushdy", email: 'ehab@gmail.com'},
  {id:2, doctorname:"EhabRushdy", email: 'ehab@gmail.com'},
  {id:3, doctorname:"EhabRushdy", email: 'ehab@gmail.com'},
  {id:4, doctorname:"EhabRushdy", email: 'ehab@gmail.com'},
  {id:5, doctorname:"EhabRushdy", email: 'ehab@gmail.com'},
  {id:6, doctorname:"EhabRushdy", email: 'ehab@gmail.com'},
  {id:7, doctorname:"EhabRushdy", email: 'ehab@gmail.com'},
  {id:8, doctorname:"EhabRushdy", email: 'ehab@gmail.com'},
  {id:9, doctorname:"EhabRushdy", email: 'ehab@gmail.com'},
]
constructor(private http:HttpClient){}
dleteMember(id:number){
  return this.http.delete(`api/members/${id}`)
}

}

