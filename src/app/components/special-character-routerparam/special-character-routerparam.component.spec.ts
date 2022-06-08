import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialCharacterRouterparamComponent } from './special-character-routerparam.component';

describe('SpecialCharacterRouterparamComponent', () => {
  let component: SpecialCharacterRouterparamComponent;
  let fixture: ComponentFixture<SpecialCharacterRouterparamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialCharacterRouterparamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialCharacterRouterparamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
