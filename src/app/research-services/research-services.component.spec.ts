import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchServicesComponent } from './research-services.component';

describe('ResearchServicesComponent', () => {
  let component: ResearchServicesComponent;
  let fixture: ComponentFixture<ResearchServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
