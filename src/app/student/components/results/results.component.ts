import { Component } from '@angular/core';
import { SubsResults } from 'src/app/Models/courses';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
  results : SubsResults[];
  constructor(){
    this.results = [
      {id: 1, midterm : 10, oral: 10, practical: 10, subname: 'Android'},
      {id: 2, midterm : 10, oral: 10, practical: 10, subname: 'Android'},
      {id: 3, midterm : 10, oral: 10, practical: 10, subname: 'Android'},
      {id: 4, midterm : 10, oral: 50, practical: 10, subname: 'Android'},
    ]
  }
}
