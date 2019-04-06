import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareRentComponent } from './compare-rent.component';

describe('CompareRentComponent', () => {
  let component: CompareRentComponent;
  let fixture: ComponentFixture<CompareRentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareRentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
