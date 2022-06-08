import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialCharacterQueryparamComponent } from './special-character-queryparam.component';

describe('SpecialCharacterQueryparamComponent', () => {
  let component: SpecialCharacterQueryparamComponent;
  let fixture: ComponentFixture<SpecialCharacterQueryparamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialCharacterQueryparamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialCharacterQueryparamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
