import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPeticionComponent } from './formulario-peticion.component';

describe('FormularioPeticionComponent', () => {
  let component: FormularioPeticionComponent;
  let fixture: ComponentFixture<FormularioPeticionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioPeticionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioPeticionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
