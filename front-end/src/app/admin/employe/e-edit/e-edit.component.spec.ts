import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EEditComponent } from './e-edit.component';

describe('EEditComponent', () => {
  let component: EEditComponent;
  let fixture: ComponentFixture<EEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
