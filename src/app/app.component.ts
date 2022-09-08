import { Component } from '@angular/core';
import { Student } from './modules/student.model';
import { StudentService } from './services/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  students: Student[]  =  [];

  constructor(private studentService:  StudentService) {
    this.students = [];
  }

  ngOnInit() {
    const studentsObservable = this.studentService.getStudent();
    studentsObservable.subscribe((studentsData: Student[]) => {
      this.students = studentsData;
    }
  )};
}
