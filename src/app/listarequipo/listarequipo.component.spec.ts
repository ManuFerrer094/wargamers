import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarequipoComponent } from './listarequipo.component';

describe('ListarequipoComponent', () => {
  let component: ListarequipoComponent;
  let fixture: ComponentFixture<ListarequipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarequipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarequipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
