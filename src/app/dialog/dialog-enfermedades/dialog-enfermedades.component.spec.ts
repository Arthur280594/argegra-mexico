import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEnfermedadesComponent } from './dialog-enfermedades.component';

describe('DialogEnfermedadesComponent', () => {
  let component: DialogEnfermedadesComponent;
  let fixture: ComponentFixture<DialogEnfermedadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogEnfermedadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEnfermedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
