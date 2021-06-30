import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FdiSolutionsComponent } from './fdi-solutions.component';

describe('FdiSolutionsComponent', () => {
  let component: FdiSolutionsComponent;
  let fixture: ComponentFixture<FdiSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FdiSolutionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FdiSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
