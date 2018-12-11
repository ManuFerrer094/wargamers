import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasxwingComponent } from './listasxwing.component';

describe('ListasxwingComponent', () => {
  let component: ListasxwingComponent;
  let fixture: ComponentFixture<ListasxwingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListasxwingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListasxwingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
