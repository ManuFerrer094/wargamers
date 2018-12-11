import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnunciosunderworldsComponent } from './anunciosunderworlds.component';

describe('AnunciosunderworldsComponent', () => {
  let component: AnunciosunderworldsComponent;
  let fixture: ComponentFixture<AnunciosunderworldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnunciosunderworldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnunciosunderworldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
