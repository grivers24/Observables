import { Component } from '@angular/core';
import { Employee } from './employee';
import { Student } from './modules/student.model';
import { EmployeeService } from './services/employee.service';
import { StudentService } from './services/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  students: Student[]  =  [];
  employees: Employee[] = [];

  constructor(private studentService:  StudentService, private empService: EmployeeService) {
    this.students = [];
  }

  ngOnInit() {
    const studentsObservable = this.studentService.getStudent();
    studentsObservable.subscribe((studentsData: Student[]) => {
      this.students = studentsData;
    })

    this.empService.getEmployee().subscribe(
      data => {
        this.employees = data;
      }
    );
  }
}
