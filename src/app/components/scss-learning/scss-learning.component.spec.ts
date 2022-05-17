import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScssLearningComponent } from './scss-learning.component';

describe('ScssLearningComponent', () => {
  let component: ScssLearningComponent;
  let fixture: ComponentFixture<ScssLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScssLearningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScssLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
