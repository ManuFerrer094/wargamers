import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasunderworldsComponent } from './listasunderworlds.component';

describe('ListasunderworldsComponent', () => {
  let component: ListasunderworldsComponent;
  let fixture: ComponentFixture<ListasunderworldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListasunderworldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListasunderworldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
