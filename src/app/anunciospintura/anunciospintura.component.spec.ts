import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnunciospinturaComponent } from './anunciospintura.component';

describe('AnunciospinturaComponent', () => {
  let component: AnunciospinturaComponent;
  let fixture: ComponentFixture<AnunciospinturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnunciospinturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnunciospinturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
