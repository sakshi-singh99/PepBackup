import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeReviewComponent } from './TeamReview/employee-review/employee-review.component';
import { GoalComponent } from './TeamReview/goal/goal.component';
import { ObjectiveComponent } from './TeamReview/objective/objective.component';
import { TeamReviewComponent } from './TeamReview/team-review/team-review.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeReviewComponent,
    GoalComponent,
    ObjectiveComponent,
    TeamReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
