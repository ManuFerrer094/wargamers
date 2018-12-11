import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicalistaComponent } from './publicalista.component';

describe('PublicalistaComponent', () => {
  let component: PublicalistaComponent;
  let fixture: ComponentFixture<PublicalistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicalistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicalistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
