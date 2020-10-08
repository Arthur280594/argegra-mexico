import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTipoAgenteComponent } from './dialog-tipo-agente.component';

describe('DialogTipoAgenteComponent', () => {
  let component: DialogTipoAgenteComponent;
  let fixture: ComponentFixture<DialogTipoAgenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogTipoAgenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTipoAgenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
