import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Equipos40kComponent } from './equipos40k.component';

describe('Equipos40kComponent', () => {
  let component: Equipos40kComponent;
  let fixture: ComponentFixture<Equipos40kComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Equipos40kComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Equipos40kComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
