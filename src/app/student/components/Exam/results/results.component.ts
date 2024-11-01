import { Answers } from './../quizmodel';
import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
  
@Input() answers: Answers ;

}
