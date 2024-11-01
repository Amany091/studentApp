import { Component } from '@angular/core';
import { Quiz } from '../quizmodel';
import { QuestionService } from 'src/app/studentapp/services/question/question.service';

@Component({
  selector: 'app-startquiz',
  templateUrl: './startquiz.component.html',
  styleUrls: ['./startquiz.component.scss']
})
export class StartquizComponent {
  quiz: Quiz[];

  constructor(private questionsService: QuestionService) {
    this.questionsService.getQuizzes()
      .subscribe(quiz => {
        this.quiz = quiz;
      });
  }

  reset() {
    this.quiz = undefined;
  }
}
