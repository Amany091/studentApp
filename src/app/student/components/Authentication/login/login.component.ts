import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NameValidator } from './info.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LogInComponent {
  email = new FormControl('', [Validators.required, Validators.email, Validators.pattern('.*fci.zu.edu.eg$')]);
  password = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.email.hasError('required') && this.password.hasError('required') ) {
      return 'You must enter a value';
    }
    return this.email.hasError('pattern') ? 'Not a valid email' : '';

  }

// @ViewChild('form') Status! : ElementRef ;

//   profileForm! : FormGroup;
//   constructor(private fb:FormBuilder){
//     this.profileForm = this.fb.group({
//       Email: [ '' , [Validators.required, Validators.email, Validators.pattern('.*fci.zu.edu.eg$')]],
//       password: ['',[Validators.required ]]

//     })

//     this.profileForm.valueChanges.subscribe(changes => {
//       // console.log( this.Email);

//     })
//   }

//   get password(){
//     return this.profileForm.get('password')
//   }
//   get userEmail(){
//     return this.profileForm.get('Email')
//   }



//   OnSubmit(){
//     console.log(this.profileForm.value);

//   }

}


  //   constructor(private auth:AuthService, private router:Router){}
  // logIn(){
  //   if(this.userEmail.trim().length===0){
  //     this.errorMsg = "username is required";
  //   }else if(this.userPass.trim().length===0){
  //     this.errorMsg = "password is required";
  //   }else{
  //     this.errorMsg = '';
  //     let res = this.auth.logIn(this.userEmail, this.userPass);
  //     if(res === 200){
  //       this.router.navigate(['home']);
  //     }else if(res === 403){
  //       this.errorMsg = "Invalid User"
  //     }
  //   }
  // }

