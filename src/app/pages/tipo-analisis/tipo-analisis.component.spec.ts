import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoAnalisisComponent } from './tipo-analisis.component';

describe('TipoAnalisisComponent', () => {
  let component: TipoAnalisisComponent;
  let fixture: ComponentFixture<TipoAnalisisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoAnalisisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoAnalisisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
