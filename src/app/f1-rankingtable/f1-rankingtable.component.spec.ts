import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F1RankingtableComponent } from './f1-rankingtable.component';

describe('F1RankingtableComponent', () => {
  let component: F1RankingtableComponent;
  let fixture: ComponentFixture<F1RankingtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ F1RankingtableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(F1RankingtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
