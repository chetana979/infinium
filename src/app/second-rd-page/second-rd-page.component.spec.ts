import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondRdPageComponent } from './second-rd-page.component';

describe('SecondRdPageComponent', () => {
  let component: SecondRdPageComponent;
  let fixture: ComponentFixture<SecondRdPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondRdPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondRdPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
