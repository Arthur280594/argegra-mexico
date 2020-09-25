import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEspecieComponent } from './dialog-especie.component';

describe('DialogEspecieComponent', () => {
  let component: DialogEspecieComponent;
  let fixture: ComponentFixture<DialogEspecieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogEspecieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEspecieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
