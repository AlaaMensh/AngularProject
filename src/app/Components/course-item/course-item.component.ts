import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseServiceService } from 'src/app/Services/course-service.service';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {

  constructor(private courseService : CourseServiceService ,private route: Router) { }
  @Input() course:any;
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
  id:any;
  deleteCourse(course){
    console.log(course);
    let response = this.courseService.deleteCourse(course.id)
    .subscribe(
      (resp)=>{
      }
      )
      this.route.navigate(['/courses']);


  }

}
