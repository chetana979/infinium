import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdRdComponent } from './third-rd.component';

describe('ThirdRdComponent', () => {
  let component: ThirdRdComponent;
  let fixture: ComponentFixture<ThirdRdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdRdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdRdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
