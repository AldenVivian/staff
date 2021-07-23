import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder,FormGroup ,Validators} from '@angular/forms';


@Component({
  selector: 'app-coursehome',
  templateUrl: './coursehome.component.html',
  styleUrls: ['./coursehome.component.css']
})
export class CoursehomeComponent implements OnInit {

  courseForm: any;
  coursecode:any;
  coursetitle:any;
  credits:any;
  hours:any;
  category:any;
  semester:any;
  regulation:any;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.courseForm = this.formBuilder.group({
      coursecode:['',[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z0-9]+$")]],
      coursetitle:['',[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z]+$")]],
      credits:['',[Validators.required,Validators.minLength(1),Validators.pattern("[0-9]")]],
      hours:['',[Validators.required,Validators.minLength(1),Validators.pattern("[0-9]")]],
      category:['',[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z-()/,]+$")]],
      semester:['',[Validators.required,Validators.minLength(1),Validators.pattern("[0-9]")]],
      regulation:['',[Validators.required,Validators.minLength(4),Validators.pattern("[a-zA-Z0-9]+$"),Validators.maxLength(4)]]


    })
  }

  saveDetails(){

    console.log(this.courseForm.value);

  }

}
