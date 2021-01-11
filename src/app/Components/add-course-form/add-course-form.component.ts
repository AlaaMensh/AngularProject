import { analyzeAndValidateNgModules, identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from 'src/app/Services/course-service.service';

@Component({
  selector: 'app-add-course-form',
  templateUrl: './add-course-form.component.html',
  styleUrls: ['./add-course-form.component.css']
})
export class AddCourseFormComponent implements OnInit {

  constructor(private courseService : CourseServiceService) { }

  ngOnInit(): void {
  }
  courses:any;
  addCourse(id,name , instructor , price, chapters, lesson){
    let course = {
      id:id,
      name:name,
      instructor:instructor,
      price:price,
      chapter:chapters,
      lesson:lesson
    }

    // console.log(course);
      let response = this.courseService.addNewCourse(course)
      .subscribe(
        (response:any) =>{
          // this.courses.push(course);
          console.log(response.length);
          window.alert("Added Successfully....");

          // this.courses = response;
          //   for (let i = 0; i < 3; i++) {
        //     this.Courses.push(response[i])
        //   }

        },
        (err)=>{console.log(err);
        }
      )





  }

}
