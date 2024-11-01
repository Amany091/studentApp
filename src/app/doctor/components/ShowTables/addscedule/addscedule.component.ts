import { Component } from '@angular/core';

@Component({
  selector: 'app-addscedule',
  templateUrl: './addscedule.component.html',
  styleUrls: ['./addscedule.component.scss']
})
export class AddsceduleComponent {
  subjects:string[] = ['Android', 'DigitalSignal']
  dropdownlist:boolean = false;
  lecTime:Date = new Date()
  location: string
  constructor(){

  }
  dropdownList(){
    this.dropdownlist = !this.dropdownlist;
  }
}
