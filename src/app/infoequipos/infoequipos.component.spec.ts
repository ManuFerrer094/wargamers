import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoequiposComponent } from './infoequipos.component';

describe('InfoequiposComponent', () => {
  let component: InfoequiposComponent;
  let fixture: ComponentFixture<InfoequiposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoequiposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoequiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
