import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadInfographicsComponent } from './read-infographics.component';

describe('ReadInfographicsComponent', () => {
  let component: ReadInfographicsComponent;
  let fixture: ComponentFixture<ReadInfographicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadInfographicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadInfographicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
