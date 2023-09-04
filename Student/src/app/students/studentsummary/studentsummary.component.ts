import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/student.service';

@Component({
  selector: 'app-studentsummary',
  templateUrl: './studentsummary.component.html',
  styleUrls: []
})
export class StudentsummaryComponent implements OnInit{
  ProfileImg : string = '../../../assets/image/ProfilePicture.png';
  
  constructor(public studentSvc:StudentService){}

  ngOnInit(): void {
    
  }
}
