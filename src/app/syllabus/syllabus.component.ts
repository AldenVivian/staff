import { Component, OnInit } from '@angular/core';

import { FormBuilder,FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.css']
})
export class SyllabusComponent implements OnInit {

  kvalue:any;
  

  checkarr:any = [];
  syllabusForm: FormGroup;
  constructor(private fb: FormBuilder){
    
    
    this.syllabusForm = this.fb.group({
      
      progarr: this.fb.array([this.fb.group({program:'',k1:'false',k2:'false',k3:'false',k4:'false',k5:'false'})]),
      
      //kvalue : this.fb.array([this.fb.group({k:''})])
     // k1 :[''],
      //k2 :[''],
      //k3 :[''],
     // k4 :[''],
     // k5 :[''],
    })

  }
  ngOnInit(){
     /* Initiate the form structure */
     this.syllabusForm = this.fb.group({
    
      progarr: this.fb.array([this.fb.group({program:'',k1:'true',k2:'true',k3:'true',k4:'true',k5:'true'})]),
      
      //kvalue : this.fb.array([this.fb.group({k:''})])   //this.fb.array([this.fb.group({k:''})])])
      //k1 :[''],
     // k2 :[''],
     // k3 :[''],
     //k4 :[''],
      //k5 :[''],
      
    })
    
  }

  get progs() {
    return this.syllabusForm.get('progarr') as FormArray;
  }
  

 

  addProgram() {
    this.progs.push(this.fb.group({program:'',k1:'true',k2:'true',k3:'true',k4:'true',k5:'true'}));
    
    
  }

 
  addk(kindex:any){
    this.progs.push(this.fb.group({k:kindex}))
    //this.checker.push(this.fb.group(({k:kindex}))
    //this.progs.removeAt(num-1);
    //this.fb.group(({k:kindex})
    //this.progs.setValue(k:)

  }
  

  
  deleteProgram(index:number) {
    this.progs.removeAt(index);
  }

}
