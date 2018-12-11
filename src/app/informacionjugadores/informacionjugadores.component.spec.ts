import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionjugadoresComponent } from './informacionjugadores.component';

describe('InformacionjugadoresComponent', () => {
  let component: InformacionjugadoresComponent;
  let fixture: ComponentFixture<InformacionjugadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionjugadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionjugadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
