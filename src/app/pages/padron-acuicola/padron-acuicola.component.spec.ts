import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadronAcuicolaComponent } from './padron-acuicola.component';

describe('PadronAcuicolaComponent', () => {
  let component: PadronAcuicolaComponent;
  let fixture: ComponentFixture<PadronAcuicolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadronAcuicolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadronAcuicolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
