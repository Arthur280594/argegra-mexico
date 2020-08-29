import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoAgenteComponent } from './tipo-agente.component';

describe('TipoAgenteComponent', () => {
  let component: TipoAgenteComponent;
  let fixture: ComponentFixture<TipoAgenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoAgenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoAgenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
