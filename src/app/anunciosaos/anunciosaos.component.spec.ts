import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnunciosaosComponent } from './anunciosaos.component';

describe('AnunciosaosComponent', () => {
  let component: AnunciosaosComponent;
  let fixture: ComponentFixture<AnunciosaosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnunciosaosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnunciosaosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
