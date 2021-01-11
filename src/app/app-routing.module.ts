import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCourseFormComponent } from './Components/add-course-form/add-course-form.component';
import { CourseDetailsComponent } from './Components/course-details/course-details.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { ErrorComponent } from './Components/error/error.component';
import { HomeComponent } from './Components/home/home.component';
import { InstructorDetailsComponent } from './Components/instructor-details/instructor-details.component';
import { InstructorsComponent } from './Components/instructors/instructors.component';
import { StudentsDetailsComponent } from './Components/students-details/students-details.component';


const routes: Routes = [
  {path:"" , component:HomeComponent , pathMatch:"full"},
  {path:"home" , component:HomeComponent},
  {path:"courses" , component:CoursesComponent},
  {path:"home/courses" , component:CoursesComponent},
  {path:"home/:id" ,redirectTo : "courses/:id",pathMatch:"full"},
  {path:":id" ,redirectTo : "courses/:id",pathMatch:"full"},
  {path:"courses/:id" , component:CourseDetailsComponent},
  {path:"instructors" , component:InstructorsComponent},
  {path:"instructors/:id" , component:InstructorDetailsComponent},
  {path:"students/:id" , component:StudentsDetailsComponent},
  {path:"courses/course/addcourse" , component:AddCourseFormComponent},
  {path:"home/courses/course/addcourse" ,redirectTo:"courses/course/addcourse", pathMatch:"full"},
  {path:"**" , component:ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
