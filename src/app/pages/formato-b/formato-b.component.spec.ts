import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatoBComponent } from './formato-b.component';

describe('FormatoBComponent', () => {
  let component: FormatoBComponent;
  let fixture: ComponentFixture<FormatoBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatoBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatoBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
