import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasfowComponent } from './listasfow.component';

describe('ListasfowComponent', () => {
  let component: ListasfowComponent;
  let fixture: ComponentFixture<ListasfowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListasfowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListasfowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
