import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasbbComponent } from './listasbb.component';

describe('ListasbbComponent', () => {
  let component: ListasbbComponent;
  let fixture: ComponentFixture<ListasbbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListasbbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListasbbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
