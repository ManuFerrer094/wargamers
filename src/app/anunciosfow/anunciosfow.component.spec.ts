import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnunciosfowComponent } from './anunciosfow.component';

describe('AnunciosfowComponent', () => {
  let component: AnunciosfowComponent;
  let fixture: ComponentFixture<AnunciosfowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnunciosfowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnunciosfowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
