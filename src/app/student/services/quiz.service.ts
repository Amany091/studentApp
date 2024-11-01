import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  DepapiURL = '';
  quesapiURL = '';
  constructor(private http: HttpClient) { }

  getAllDepartment():Observable<any>{
    return this.http.get(this.DepapiURL) // read dep APIS
  }
  getQuestions() {
    return this.http.get<any[]>(this.quesapiURL);
  }
}
