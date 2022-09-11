import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EIndexComponent } from './e-index.component';

describe('EIndexComponent', () => {
  let component: EIndexComponent;
  let fixture: ComponentFixture<EIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
