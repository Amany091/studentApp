import { Component ,Input, Output, EventEmitter, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Question } from '../quizmodel';

@Component({
  selector: 'app-questionform',
  templateUrl: './questionform.component.html',
  styleUrls: ['./questionform.component.scss']
})
export class QuestionformComponent implements OnInit {
  @Input() question: Question;
  @Output() onChoiceMade = new EventEmitter<string>();

  private form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      choice: new FormControl()
    });

    this.form.valueChanges.subscribe(this.onChange);
  }

  onChange = () => {
    this.onChoiceMade.emit(this.form.value.choice);
  }
}
