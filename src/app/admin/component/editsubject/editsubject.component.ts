import { Component } from '@angular/core';

interface doctors{
  id:any,
  name:string;
}
interface academyLvels{
  id:any,
  level: number
}

@Component({
  selector: 'app-editsubject',
  templateUrl: './editsubject.component.html',
  styleUrls: ['./editsubject.component.css']
})
export class EditsubjectComponent {
  doctors:doctors[]=[
    {id:1, name: "DR Ehab Rushdy"},
    {id:2, name: "DR Nabel"},
    {id:3, name: "DR Osama ElKomy"}
  ]
  academyLevels : academyLvels [] = [
    {id:1,level:1},
    {id:2,level:2},
    {id:3,level:3},
    {id:4,level:4},
  ]
}
