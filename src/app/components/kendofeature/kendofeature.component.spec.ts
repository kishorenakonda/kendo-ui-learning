import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendofeatureComponent } from './kendofeature.component';

describe('KendofeatureComponent', () => {
  let component: KendofeatureComponent;
  let fixture: ComponentFixture<KendofeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KendofeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KendofeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
