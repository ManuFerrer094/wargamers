import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnunciosbbComponent } from './anunciosbb.component';

describe('AnunciosbbComponent', () => {
  let component: AnunciosbbComponent;
  let fixture: ComponentFixture<AnunciosbbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnunciosbbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnunciosbbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
