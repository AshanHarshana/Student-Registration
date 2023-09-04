import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { StudentComponent } from './students/student/student.component';

const routes: Routes = [
  // {path:'',redirectTo:'student',pathMatch:'full'},
  {path:'students',component:StudentsComponent},
  {path:'student',children:[
    {path:'',component:StudentComponent},
    {path:'edit/:id',component:StudentComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
