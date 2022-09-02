import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-objective',
  templateUrl: './objective.component.html',
  styleUrls: ['./objective.component.css']
})
export class ObjectiveComponent implements OnInit {
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

  
}
