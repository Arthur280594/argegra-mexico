import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFormatoBComponent } from './dialog-formato-b.component';

describe('DialogFormatoBComponent', () => {
  let component: DialogFormatoBComponent;
  let fixture: ComponentFixture<DialogFormatoBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogFormatoBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFormatoBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
