import { Component } from '@angular/core';
interface Feedback {
  postid:number
  code:any
  field:any
}
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {

  feedback:Feedback[] = [
    { postid: 1 ,code: '20912019@fci.zu.edu.eg', field: 'thanks doctor' },
    { postid: 2 ,code: '20912019@fci.zu.edu.eg', field: 'thanks doctor' },
  ]
}
