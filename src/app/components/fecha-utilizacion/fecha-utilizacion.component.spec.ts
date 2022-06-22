import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FechaUtilizacionComponent } from './fecha-utilizacion.component';

describe('FechaUtilizacionComponent', () => {
  let component: FechaUtilizacionComponent;
  let fixture: ComponentFixture<FechaUtilizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FechaUtilizacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FechaUtilizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
