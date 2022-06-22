import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActaDisfruteComponent } from './acta-disfrute.component';

describe('ActaDisfruteComponent', () => {
  let component: ActaDisfruteComponent;
  let fixture: ComponentFixture<ActaDisfruteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActaDisfruteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActaDisfruteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
