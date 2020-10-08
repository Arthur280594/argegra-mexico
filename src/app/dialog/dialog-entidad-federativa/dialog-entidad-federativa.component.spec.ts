import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEntidadFederativaComponent } from './dialog-entidad-federativa.component';

describe('DialogEntidadFederativaComponent', () => {
  let component: DialogEntidadFederativaComponent;
  let fixture: ComponentFixture<DialogEntidadFederativaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogEntidadFederativaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEntidadFederativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
