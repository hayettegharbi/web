import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMoniteurComponent } from './form-moniteur.component';

describe('FormMoniteurComponent', () => {
  let component: FormMoniteurComponent;
  let fixture: ComponentFixture<FormMoniteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMoniteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMoniteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
