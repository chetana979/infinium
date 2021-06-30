import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfograpgFormComponent } from './infograpg-form.component';

describe('InfograpgFormComponent', () => {
  let component: InfograpgFormComponent;
  let fixture: ComponentFixture<InfograpgFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfograpgFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfograpgFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
