import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowthMatrixComponent } from './growth-matrix.component';

describe('GrowthMatrixComponent', () => {
  let component: GrowthMatrixComponent;
  let fixture: ComponentFixture<GrowthMatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrowthMatrixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowthMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
