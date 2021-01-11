import { Component, OnDestroy, OnInit } from '@angular/core';
import { CourseServiceService } from 'src/app/Services/course-service.service';
import { InstructorService } from 'src/app/Services/instructor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
Courses:any;
Instructors:any;
  constructor(private courseService: CourseServiceService , private instructorService : InstructorService ) { }

subsriber:any;
  ngOnInit(): void {
    let response = this.courseService.getAllCourses()
    .subscribe(
      (response:any) =>{
        console.log(response.length);
        this.Courses = response;
        //   for (let i = 0; i < 3; i++) {
      //     this.Courses.push(response[i])
      //   }

      }
    )
    let resp = this.instructorService.getAllInstructors()
    .subscribe(
      (response:any) =>{
        console.log(response.length);
        this.Instructors = response;
        //   for (let i = 0; i < 3; i++) {
      //     this.Courses.push(response[i])
      //   }

      }
    )
  }

}
