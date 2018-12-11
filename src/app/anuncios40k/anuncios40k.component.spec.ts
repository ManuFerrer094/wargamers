import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Anuncios40kComponent } from './anuncios40k.component';

describe('Anuncios40kComponent', () => {
  let component: Anuncios40kComponent;
  let fixture: ComponentFixture<Anuncios40kComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Anuncios40kComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Anuncios40kComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
