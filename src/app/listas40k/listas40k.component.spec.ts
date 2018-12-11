import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Listas40kComponent } from './listas40k.component';

describe('Listas40kComponent', () => {
  let component: Listas40kComponent;
  let fixture: ComponentFixture<Listas40kComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Listas40kComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Listas40kComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
