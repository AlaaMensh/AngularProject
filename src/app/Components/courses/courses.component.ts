import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from 'src/app/Services/course-service.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private courseService : CourseServiceService) { }

  courses:any;
  ngOnInit(): void {
    let response = this.courseService.getAllCourses()
    .subscribe(
      (response:any) =>{
        console.log(response.length);
        this.courses = response;
        //   for (let i = 0; i < 3; i++) {
      //     this.Courses.push(response[i])
      //   }

      }
    )
  }



}
