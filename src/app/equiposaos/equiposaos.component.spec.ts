import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposaosComponent } from './equiposaos.component';

describe('EquiposaosComponent', () => {
  let component: EquiposaosComponent;
  let fixture: ComponentFixture<EquiposaosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquiposaosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquiposaosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
