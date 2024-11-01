import { FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  hide = true ;
  name = new FormControl('', [Validators.required])
  lastname = new FormControl(null, [Validators.required])
  password = new FormControl('', [Validators.required])
  email = new FormControl('',[Validators.required, Validators.email, Validators.pattern('.*fci.zu.edu.eg')])
  phone = new FormControl('', [Validators.required, Validators.maxLength(11)])

  getErrorMessage(){
    if(this.name.getError('required') || this.lastname.getError('required') || this.password.getError('required') || this.email.getError('required') || this.phone.getError('required')){
      return 'you must enter a value'
    } else if (this.email.getError('pattern')) {
      return 'not aa valid email'
    }
    return null
  }
}
