import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeChuckComponent } from './joke-chuck.component';

describe('JokeChuckComponent', () => {
  let component: JokeChuckComponent;
  let fixture: ComponentFixture<JokeChuckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokeChuckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeChuckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
