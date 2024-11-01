import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-addfeedback',
  templateUrl: './addfeedback.component.html',
  styleUrls: ['./addfeedback.component.scss']
})
export class AddfeedbackComponent {
  FeedbackForm: FormGroup;
  studentCodeChanged:boolean = false;
  studentNameControl:any;
  moreFeedbackArray: FormArray ;



  constructor(private FormBuilder: FormBuilder){
    // this.buildFeedbackFrom()
  }
  // buildFeedbackFrom(){
  //   studentname :new FormControl(null, Validators.required)
  //   studentcomment: new FormControl(null)
  //   suggestions: new FormControl(null)
  //   // this.FeedbackForm = this.FormBuilder.group({
  //   //   studentName: this.FormBuilder.control(null, [Validators.required]),
  //   //   studentComment: this.FormBuilder.control(null),
  //   //   suggestion: this.FormBuilder.control(null)
  //   // })
  //   // building form array control
  //   this.moreFeedbackArray = this.FeedbackForm.get('morefeedback') as FormArray;
  //   // create a student name
  //   // this.studentNameControl = this.FeedbackForm.get('studentname')


  //   // // subscribe to value changes event for student name
  //   // this.studentNameControl.valueChanges.subscribe( (data: any)=> {
  //   //   this.studentCodeChanged = data && data.toUpperCase().trim()=== "TESTING";
  //   // })

  //   this.FeedbackForm.controls['studentname'].valueChanges.subscribe(value => {
  //     console.log(value);
  //   })
  //   this.FeedbackForm.get('studentname').valueChanges.subscribe(value =>{
  //     console.log('name has changed', value);

  //   })
  // }
  addMoreFeedback(){
    this.moreFeedbackArray.push(this.FormBuilder.control(null));
  }
  deleteFeedback(index: number){
    this.moreFeedbackArray.removeAt(index)
  }

  cleatForm(){
    this.FeedbackForm.reset();
  }
  submitFeedbackForm(){
    console.log(this.FeedbackForm.value);

  }
}
