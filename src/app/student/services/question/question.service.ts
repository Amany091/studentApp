import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question, Quiz } from '../../components/Exam/quizmodel';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

  public getQuizzes() {
    return this.http.get(`./assets/quiz-list.json`).pipe(

      map((result:any) => {
        return result.map( (r:any) => new Quiz(r.label, r.name, r.description, r.fileName));
      })
    );
  }

  public getQuestions(fileName: string) {
    return this.http.get(`./assets/${fileName}.json`).pipe(
      map((result:any) => {
        return result.map( (r:any) => new Question(r.label, r.choices));
      })
    );
  }
}
