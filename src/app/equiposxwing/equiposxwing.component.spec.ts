import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposxwingComponent } from './equiposxwing.component';

describe('EquiposxwingComponent', () => {
  let component: EquiposxwingComponent;
  let fixture: ComponentFixture<EquiposxwingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquiposxwingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquiposxwingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
