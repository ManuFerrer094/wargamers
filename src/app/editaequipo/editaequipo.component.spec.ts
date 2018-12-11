import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaequipoComponent } from './editaequipo.component';

describe('EditaequipoComponent', () => {
  let component: EditaequipoComponent;
  let fixture: ComponentFixture<EditaequipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaequipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaequipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
