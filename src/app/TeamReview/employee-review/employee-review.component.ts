import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import empData from 'src/app/TeamReview/data/empInfo.json'

interface Employee {
  name: String;
  id: Number;
  degisignation: String;
  department:String;
  goals: Number;
  completed :String;
  Score:Number;
  reviwer:String;
  Promotion :String;
  happiness:String;
}


@Component({
  selector: 'app-employee-review',
  templateUrl: './employee-review.component.html',
  styleUrls: ['./employee-review.component.css']
})

export class EmployeeReviewComponent implements OnInit {

 public Employee=[
  {
    "name": "Sakshi Singh",
    "id": 1,
    "degisignation": "Trainee Software Engineer",
    "department":"Degital Experiance",
    "goals": 1,
    "completed":"80%",
    "score":9,
    "reviwer":"NA",
    "promotion":"09-Nov-2021",
    "happiness":"100%"
  },

  {
    "name": "Sakshi Singh",
    "id": 1,
    "degisignation": "Trainee Software Engineer",
    "department":"Degital Experiance",
    "goals": 1,
    "completed":"80%",
    "score":9,
    "reviwer":"NA",
    "promotion":"09-Nov-2021",
    "happiness":"100%"
  },


] ;

  constructor() {
console.log(this.Employee);
  }

  ngOnInit(): void {
  }
 

}
