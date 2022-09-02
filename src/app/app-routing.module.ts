import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeReviewComponent } from './TeamReview/employee-review/employee-review.component';
import { GoalComponent } from './TeamReview/goal/goal.component';
import { ObjectiveComponent } from './TeamReview/objective/objective.component';
import { TeamReviewComponent } from './TeamReview/team-review/team-review.component';

const routes: Routes = [
  {path:'objective', component: ObjectiveComponent},
  {path:'goal', component: GoalComponent},
  {path:'employeeReview', component: EmployeeReviewComponent},
  {path:'teamReview', component: TeamReviewComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
