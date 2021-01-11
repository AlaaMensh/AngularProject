import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  URL ="http://localhost:3000/courses";
  constructor( private courseService: HttpClient) { }
  getAllCourses(){
   return this.courseService.get(this.URL);
  }

  addNewCourse(course){
   return this.courseService.post(this.URL , course);
  }
  getCourseByID(id){
   return this.courseService.get(this.URL + "/"+ id);
  }
  deleteCourse(id){
   return this.courseService.delete(this.URL +"/"+id);
  }

}
