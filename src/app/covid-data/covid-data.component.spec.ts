import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidDataComponent } from './covid-data.component';

describe('CovidDataComponent', () => {
  let component: CovidDataComponent;
  let fixture: ComponentFixture<CovidDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
