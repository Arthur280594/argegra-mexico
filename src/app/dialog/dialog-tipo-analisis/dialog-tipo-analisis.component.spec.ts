import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTipoAnalisisComponent } from './dialog-tipo-analisis.component';

describe('DialogTipoAnalisisComponent', () => {
  let component: DialogTipoAnalisisComponent;
  let fixture: ComponentFixture<DialogTipoAnalisisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogTipoAnalisisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTipoAnalisisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
