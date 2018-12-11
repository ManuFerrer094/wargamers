import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposbbComponent } from './equiposbb.component';

describe('EquiposbbComponent', () => {
  let component: EquiposbbComponent;
  let fixture: ComponentFixture<EquiposbbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquiposbbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquiposbbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
