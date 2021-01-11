import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { StudentsDetailsComponent } from './Components/students-details/students-details.component';
import { InstructorsComponent } from './Components/instructors/instructors.component';
import { InstructorDetailsComponent } from './Components/instructor-details/instructor-details.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { CourseDetailsComponent } from './Components/course-details/course-details.component';
import { ErrorComponent } from './Components/error/error.component';
import { StudentsComponent } from './Components/students/students.component';
import {HttpClientModule} from "@angular/common/http";
import { CourseItemComponent } from './Components/course-item/course-item.component'
import {FormsModule , ReactiveFormsModule} from "@angular/forms";
import { AddCourseFormComponent } from './Components/add-course-form/add-course-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentsDetailsComponent,
    InstructorsComponent,
    InstructorDetailsComponent,
    CoursesComponent,
    CourseDetailsComponent,
    ErrorComponent,
    StudentsComponent,
    CourseItemComponent,
    AddCourseFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
