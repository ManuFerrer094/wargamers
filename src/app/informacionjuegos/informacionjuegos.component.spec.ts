import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionjuegosComponent } from './informacionjuegos.component';

describe('InformacionjuegosComponent', () => {
  let component: InformacionjuegosComponent;
  let fixture: ComponentFixture<InformacionjuegosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionjuegosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionjuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
