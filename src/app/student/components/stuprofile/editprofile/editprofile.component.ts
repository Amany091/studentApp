import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, Input, ModuleWithProviders } from '@angular/core';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditprofileComponent {
  @Input() inputId = '';
  @Input() control = new FormControl();
  @Input() label = '';
  FormGroup = new FormGroup({
    firstname : new FormControl('', [Validators.required]),
    lastname : new FormControl('',Validators.required),
    email : new FormControl('', [Validators.required, Validators.email])})


}
