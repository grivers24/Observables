import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  courseForm!: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.initForm();
  }

	onSubmit() {
		// Since we have  access to the FormGroup instance we can directly output the same
		console.log(this.courseForm);
	}

	private initForm() {
		this.courseForm = new FormGroup({
		  'courseName': new FormControl(null, Validators.required),
		  'courseDesc': new FormControl([Validators.required, Validators.minLength(100)]),
		  'courseAmount': new FormControl(null)
		});
	}
}
