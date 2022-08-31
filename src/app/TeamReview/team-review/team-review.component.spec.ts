import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamReviewComponent } from './team-review.component';

describe('TeamReviewComponent', () => {
  let component: TeamReviewComponent;
  let fixture: ComponentFixture<TeamReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
