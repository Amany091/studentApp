import { QuizService } from './../../../services/quiz.service';
import { Component, OnInit } from '@angular/core';
interface Question{
  question:string ;
  options:string[];
  answer:string ;
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})

export class QuizComponent  {
  questions: Question[]=[
    {
      question: 'what is tha capital of france ?',
      options: ['paris', 'london'],
      answer: 'paris'
  },
  {
    question: 'what is tha capital of france ?',
    options: ['paris', 'london'],
    answer: 'paris'
  },
  {
    question: 'what is tha capital of france ?',
    options: ['paris', 'london'],
    answer: 'paris'
  }
  ];

  isCompleted=false;
  currentquestion: Question;
  selectOption : string;
  correntanswer:number = 0;
  isStarted = true;

  constructor(private quizService: QuizService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.quizService.getQuestions().subscribe((data)=>{
      this.questions = data;
    })
  }
  startQuiz(){
    this.isStarted = true;
    this.currentquestion = this.questions[0];
  }
  selectoption(option:string){
    this.selectOption = option;
  }
  nextqestion(){
    if(this.selectOption === this.currentquestion.answer){
      this.correntanswer ++
    }
    const currentindex = this.questions.indexOf(this.currentquestion)
    if(currentindex === this.questions.length -1){
      this.isCompleted = true;
    }else{
      this.currentquestion = this.questions[currentindex+1];
      this.selectoption = null;
    }
  }


}
