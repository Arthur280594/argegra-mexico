import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPadronAcuicolaComponent } from './dialog-padron-acuicola.component';

describe('DialogPadronAcuicolaComponent', () => {
  let component: DialogPadronAcuicolaComponent;
  let fixture: ComponentFixture<DialogPadronAcuicolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogPadronAcuicolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPadronAcuicolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
