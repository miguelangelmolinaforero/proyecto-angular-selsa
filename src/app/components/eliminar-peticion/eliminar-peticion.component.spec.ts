import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarPeticionComponent } from './eliminar-peticion.component';

describe('EliminarPeticionComponent', () => {
  let component: EliminarPeticionComponent;
  let fixture: ComponentFixture<EliminarPeticionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarPeticionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarPeticionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
