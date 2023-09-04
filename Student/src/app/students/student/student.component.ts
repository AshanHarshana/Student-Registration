import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/shared/student.model';
import { StudentService } from 'src/app/shared/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: []
})
export class StudentComponent implements OnInit{
  ProfileImg : string = '../../../assets/image/ProfilePicture.png';
  isValid : boolean = true;

  constructor(public studentSvc:StudentService, private currentRoute:ActivatedRoute){}

  ngOnInit(): void {
    let studentID = this.currentRoute.snapshot.paramMap.get('id');
    if(studentID == null)
    this.resetForm();
    else
    this.studentSvc.getStudentByID(parseInt(studentID)).then((res: { result: Student; })=>{
      this.studentSvc.studentData = res.result;
    })
  }

  resetForm(form?:NgForm | any){
    if(form = null)
    form.resetForm();
    this.studentSvc.studentData ={
      StudentID : null,
      FirstName : '',
      LastName : '',
      Mobile : '',
      Email : '',
      NIC : '',
      Address : '',
      DateOfBirth : null

    };
  }

  ValidateForm(){
    this.isValid = true;
    if(this.studentSvc.studentData.FirstName == ''){
      this.isValid = false;
    }

      if(this.studentSvc.studentData.LastName == ''){
        this.isValid = false;
    }

    if(this.studentSvc.studentData.Mobile == ''){
      this.isValid = false;
    }

      if(this.studentSvc.studentData.Email == ''){
        this.isValid = false;
    }

    if(this.studentSvc.studentData.NIC == ''){
      this.isValid = false;
    }

      if(this.studentSvc.studentData.Address == ''){
        this.isValid = false;
    }

    if(this.studentSvc.studentData.DateOfBirth == null){
      this.isValid = false;
    }

    return this.isValid;
  }

  onSubmit(form:NgForm){
    if(this.ValidateForm()){
      this.studentSvc.saveOrUpdateUser().subscribe(res =>{
        this.resetForm();
      })
    }
  }

}
