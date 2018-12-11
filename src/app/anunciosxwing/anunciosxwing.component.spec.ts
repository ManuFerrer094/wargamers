import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnunciosxwingComponent } from './anunciosxwing.component';

describe('AnunciosxwingComponent', () => {
  let component: AnunciosxwingComponent;
  let fixture: ComponentFixture<AnunciosxwingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnunciosxwingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnunciosxwingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
