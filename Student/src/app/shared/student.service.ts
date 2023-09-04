import { Injectable } from '@angular/core';
import { Student } from './student.model';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentData !: Student;

  constructor(private http:HttpClient) { }

  saveOrUpdateUser(){
    var body = {
      ...this.studentData
    }
    return this.http.post(environment.apiURL + '/Student', body)
  }

  getStudentList(){
    return this.http.get(environment.apiURL + '/Student').toPromise();
  }

  getStudentByID(id:number):any{
    return this.http.get(environment.apiURL + '/Student/' + id).toPromise();
  }

  deleteStudent(id:number, Comment:string){
    var body = {
      ID : id,
      Delcomment : Comment
    }
    debugger
    return this.http.post(environment.apiURL + '/Student', body)
  }
}
