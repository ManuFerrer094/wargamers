import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfojugadoresComponent } from './infojugadores.component';

describe('InfojugadoresComponent', () => {
  let component: InfojugadoresComponent;
  let fixture: ComponentFixture<InfojugadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfojugadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfojugadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
