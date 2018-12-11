import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposunderworldsComponent } from './equiposunderworlds.component';

describe('EquiposunderworldsComponent', () => {
  let component: EquiposunderworldsComponent;
  let fixture: ComponentFixture<EquiposunderworldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquiposunderworldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquiposunderworldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
