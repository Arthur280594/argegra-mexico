import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUsuariosComponent } from './dialog-usuarios.component';

describe('DialogUsuariosComponent', () => {
  let component: DialogUsuariosComponent;
  let fixture: ComponentFixture<DialogUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
