import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAgentePatogenoComponent } from './dialog-agente-patogeno.component';

describe('DialogAgentePatogenoComponent', () => {
  let component: DialogAgentePatogenoComponent;
  let fixture: ComponentFixture<DialogAgentePatogenoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAgentePatogenoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAgentePatogenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
