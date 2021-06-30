import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressRReadComponent } from './press-r-read.component';

describe('PressRReadComponent', () => {
  let component: PressRReadComponent;
  let fixture: ComponentFixture<PressRReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PressRReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PressRReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
