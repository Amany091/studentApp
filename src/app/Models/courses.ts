// courses render in home page
export interface Courses {
  id : number;
  name: string;
  imgURL : string;
}
// timetable
export interface tables {
  id : number;
  Dep : string;
  coursename : string;
  time : string;
  docname : string;
  location : any;
}

export interface SubsResults {
  id: number;
  subname: string;
  midterm : number;
  oral : number;
  practical : number;
}

export interface Meeting{
  lecnumber : number;
  time : number
}
