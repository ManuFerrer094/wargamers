import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposmalifauxComponent } from './equiposmalifaux.component';

describe('EquiposmalifauxComponent', () => {
  let component: EquiposmalifauxComponent;
  let fixture: ComponentFixture<EquiposmalifauxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquiposmalifauxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquiposmalifauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
