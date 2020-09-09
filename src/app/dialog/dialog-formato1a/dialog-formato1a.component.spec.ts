import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFormato1aComponent } from './dialog-formato1a.component';

describe('DialogFormato1aComponent', () => {
  let component: DialogFormato1aComponent;
  let fixture: ComponentFixture<DialogFormato1aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogFormato1aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFormato1aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
