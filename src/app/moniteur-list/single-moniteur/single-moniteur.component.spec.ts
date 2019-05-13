import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMoniteurComponent } from './single-moniteur.component';

describe('SingleMoniteurComponent', () => {
  let component: SingleMoniteurComponent;
  let fixture: ComponentFixture<SingleMoniteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleMoniteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleMoniteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
