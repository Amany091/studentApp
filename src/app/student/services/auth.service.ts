import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  logIn(userEmail:string , userPass:string){
    if(userEmail === 'amany' && userPass === '111' ){
      return 200;
    }else{
      return 403;
    }
  }
}
