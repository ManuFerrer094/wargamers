import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroequipoComponent } from './registroequipo.component';

describe('RegistroequipoComponent', () => {
  let component: RegistroequipoComponent;
  let fixture: ComponentFixture<RegistroequipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroequipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroequipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
