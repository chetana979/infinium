import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniPortalComponent } from './uni-portal.component';

describe('UniPortalComponent', () => {
  let component: UniPortalComponent;
  let fixture: ComponentFixture<UniPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniPortalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
