import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasaosComponent } from './listasaos.component';

describe('ListasaosComponent', () => {
  let component: ListasaosComponent;
  let fixture: ComponentFixture<ListasaosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListasaosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListasaosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
