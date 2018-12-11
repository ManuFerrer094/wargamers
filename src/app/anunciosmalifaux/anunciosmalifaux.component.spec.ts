import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnunciosmalifauxComponent } from './anunciosmalifaux.component';

describe('AnunciosmalifauxComponent', () => {
  let component: AnunciosmalifauxComponent;
  let fixture: ComponentFixture<AnunciosmalifauxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnunciosmalifauxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnunciosmalifauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
