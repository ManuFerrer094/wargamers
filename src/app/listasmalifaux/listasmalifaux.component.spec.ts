import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasmalifauxComponent } from './listasmalifaux.component';

describe('ListasmalifauxComponent', () => {
  let component: ListasmalifauxComponent;
  let fixture: ComponentFixture<ListasmalifauxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListasmalifauxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListasmalifauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
