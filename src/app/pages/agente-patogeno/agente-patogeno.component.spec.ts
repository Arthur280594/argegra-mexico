import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentePatogenoComponent } from './agente-patogeno.component';

describe('AgentePatogenoComponent', () => {
  let component: AgentePatogenoComponent;
  let fixture: ComponentFixture<AgentePatogenoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentePatogenoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentePatogenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
