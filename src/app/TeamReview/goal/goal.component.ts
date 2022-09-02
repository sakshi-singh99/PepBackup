import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})

export class GoalComponent implements OnInit {
  btnPlus :string = "+";
  btnExpand:string = "Expand Goals";
  constructor() { }

  ngOnInit(): void {
  }

  plusOnClick(){
    if(this.btnPlus==="+"){
      this.btnPlus="-";
    }
    else {
      this.btnPlus="+";
    }
  }
  
  ExpandOnClick(){
    if(this.btnExpand==="Expand Goals"){
      this.btnExpand="Collaspe Goals";
      this.btnPlus="-";
    }
    else {
      this.btnExpand="Expand Goals";
      this.btnPlus="+";
    }
  }

  
}
