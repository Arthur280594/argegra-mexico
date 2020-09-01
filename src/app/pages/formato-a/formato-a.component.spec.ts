import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatoAComponent } from './formato-a.component';

describe('FormatoAComponent', () => {
  let component: FormatoAComponent;
  let fixture: ComponentFixture<FormatoAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatoAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatoAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
