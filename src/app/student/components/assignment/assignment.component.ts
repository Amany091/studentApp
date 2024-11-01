import { Time } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { CourseSidebar } from 'src/app/Models/course-sidebar';
@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent {
  course : CourseSidebar[];

  selectedFile : any = null;

  OpenAssignment:boolean = false;

  overlay: boolean = false;

  public status : any;

  assignmenttime:Date = new Date() ;

  onFileSelected(event:any):void{
    this.selectedFile = event.target.files[0] ?? null ;
  }

  Assignment(){
    this.OpenAssignment = !this.OpenAssignment;
    this.overlay = !this.overlay;
  }

}
