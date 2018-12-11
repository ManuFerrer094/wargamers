import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposfowComponent } from './equiposfow.component';

describe('EquiposfowComponent', () => {
  let component: EquiposfowComponent;
  let fixture: ComponentFixture<EquiposfowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquiposfowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquiposfowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
