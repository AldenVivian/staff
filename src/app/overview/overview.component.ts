import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, Validators } from '@angular/forms';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor() { }

  overview = new FormControl('',Validators.required);

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.overview.value);
  }
  

}
