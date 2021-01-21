import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberDataComponent } from './number-data.component';

describe('NumberDataComponent', () => {
  let component: NumberDataComponent;
  let fixture: ComponentFixture<NumberDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
