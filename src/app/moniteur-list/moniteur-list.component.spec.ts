import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoniteurListComponent } from './moniteur-list.component';

describe('MoniteurListComponent', () => {
  let component: MoniteurListComponent;
  let fixture: ComponentFixture<MoniteurListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoniteurListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoniteurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
