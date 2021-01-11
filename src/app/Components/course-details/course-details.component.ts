import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseServiceService } from 'src/app/Services/course-service.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  course:any;
  id:any;
  constructor(private courseService: CourseServiceService ,private myActivateRouter : ActivatedRoute) {


   }

  ngOnInit(): void {
    this.id = this.myActivateRouter.snapshot.params["id"];
    console.log("kljlkd" +this.id);
    let response = this.courseService.getCourseByID(this.id)
    .subscribe(
      (response) =>{

        this.course = response;
    console.log(this.course);

      },(err)=>{
        console.log("something error");
      }
    )
  }

}
