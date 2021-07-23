import { Component, OnInit } from '@angular/core';

import { FormBuilder,FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.css']
})
export class SyllabusComponent implements OnInit {

  kvalue:any;
  syllabusForm: FormGroup;
  constructor(private fb: FormBuilder){
    this.syllabusForm = this.fb.group({
      
      progarr: this.fb.array([this.fb.group({program:''})]),
      kvalue : this.fb.array([this.fb.group({k:''})])
    })

  }
  ngOnInit(){
     /* Initiate the form structure */
     this.syllabusForm = this.fb.group({
    
      progarr: this.fb.array([this.fb.group({program:''})]),
      kvalue : this.fb.array([this.fb.group({k:''})])   //this.fb.array([this.fb.group({k:''})])])
      
    })
    
  }

  get progs() {
    return this.syllabusForm.get('progarr') as FormArray;
  }

  get checker(){
    return this.syllabusForm.get('kvalue') as FormArray;
  }

 
  addk(kindex:any){
    this.progs.push(this.fb.group({k:kindex}))
    //this.checker.push(this.fb.group(({k:kindex}))
    //this.progs.removeAt(num-1);
    //this.fb.group(({k:kindex})
    //this.progs.setValue(k:)

  }
  addProgram() {
    this.progs.push(this.fb.group({program:''}));
  }

  
  deleteProgram(index:number) {
    this.progs.removeAt(index);
  }

}
