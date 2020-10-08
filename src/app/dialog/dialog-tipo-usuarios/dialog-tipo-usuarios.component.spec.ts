import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTipoUsuariosComponent } from './dialog-tipo-usuarios.component';

describe('DialogTipoUsuariosComponent', () => {
  let component: DialogTipoUsuariosComponent;
  let fixture: ComponentFixture<DialogTipoUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogTipoUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTipoUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
