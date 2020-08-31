import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntidadFederativaComponent } from './entidad-federativa.component';

describe('EntidadFederativaComponent', () => {
  let component: EntidadFederativaComponent;
  let fixture: ComponentFixture<EntidadFederativaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntidadFederativaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntidadFederativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
