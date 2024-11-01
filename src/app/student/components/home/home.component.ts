import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Courses } from 'src/app/Models/courses';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css' , './home.component.scss']
})
export class HomeComponent {

  CorsesList : Courses[];
  constructor(){
    this.CorsesList=[
      {id:1 , name: 'android', imgURL: '../../assets/images/android.jpg'},
      {id:2 , name: 'Artificial Intelligence', imgURL: '../../assets/images/AI.jpg'},
      {id:3 , name: 'IOT', imgURL: '../../assets/images/iot.jpg'},
      {id:4 , name: 'Digital Image Processing', imgURL: '../../assets/images/DIP.jpg'},
      {id:5 , name: 'Animation', imgURL: '../../assets/images/animation.jpg'},
      {id:6 , name: 'Robotics', imgURL: '../../assets/images/robotics.jpg'},
    ]
  }
  navigate(courseId:number){
    console.log(courseId);
  }

}
