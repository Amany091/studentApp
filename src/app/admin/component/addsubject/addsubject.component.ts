import { Component } from '@angular/core';

interface doctors{
  id:number,
  name:string;
}
interface academyLvels{
  id:number,
  level: number
}
@Component({
  selector: 'app-addsubject',
  templateUrl: './addsubject.component.html',
  styleUrls: ['./addsubject.component.css']
})
export class AddsubjectComponent {
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
