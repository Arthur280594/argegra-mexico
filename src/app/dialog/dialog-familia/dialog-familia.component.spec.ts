import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFamiliaComponent } from './dialog-familia.component';

describe('DialogFamiliaComponent', () => {
  let component: DialogFamiliaComponent;
  let fixture: ComponentFixture<DialogFamiliaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogFamiliaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFamiliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
