import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-objective',
  templateUrl: './objective.component.html',
  styleUrls: ['./objective.component.css']
})
export class ObjectiveComponent implements OnInit {
  objective:any;
  saveGoal:boolean=true;
  close:boolean=true;
  divs: any[] = [];
  constructor() { }
  card: any[] = [];
  ngOnInit(): void {
  }
  savegoal(){
    this.saveGoal= true;
  }
  closeCheckins(){
    this.saveGoal=false;
  }
  
  add(): void {
    this.divs.push(this.divs.length);
    this.saveGoal=false;
  }
 
  onSubmit() {
    console.log('it is working');
  }
}
