import { Component, Injectable } from '@angular/core';
interface Academic {
  value:number
  year : any ;
}
interface Semeter {
  value : number;
  semesterno:any[]
}
interface Courses {
  coursename:string
  title:string
  image:any
}
@Component({
  selector: 'app-coursematerial',
  templateUrl: './coursematerial.component.html',
  styleUrls: ['./coursematerial.component.scss']
})

export class CoursematerialComponent {
academicYear:Academic[]=
[
  { value: 1, year : '3year' },
  { value: 2, year : '4th year' }
]

semester:Semeter[] = [
  { value : 1 , semesterno:[ '1st term', '2nd term' ] },

]
courses:Courses[] = [
  { coursename:'android', title: 'android', image: '../../assets/images/android.jpg' },
  { coursename:'imageprocessing', title: 'imgprocessing', image: '../../assets/images/DIP.jpg' },
  { coursename:'compression', title: 'compression', image: '../../assets/images/android.jpg'}

]
}
