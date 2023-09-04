import { Component, OnInit } from '@angular/core';
import { StudentService } from '../shared/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  studentList:any;
  showSummary:boolean = false;
  DelComment !: string;
  
  constructor(private StudentSvc:StudentService, private route:Router){}

  ngOnInit(): void {
    this.StudentSvc.getStudentList().then(res => this.studentList = res);
  }

  selectStudent(){
    debugger
    // if(ID==this.StuID){
      this.showSummary = !this.showSummary
      console.log(this.showSummary);
    
   }

   openForEdit(ID:number){
    this.route.navigate(['/student/edit/' + ID]);
   }
   
   deletStudent(ID:number){
    debugger
    this.StudentSvc.deleteStudent(ID, this.DelComment);
   }
}
