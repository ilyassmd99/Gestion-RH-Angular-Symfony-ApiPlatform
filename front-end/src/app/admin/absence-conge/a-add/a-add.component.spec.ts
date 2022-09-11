import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AAddComponent } from './a-add.component';

describe('AAddComponent', () => {
  let component: AAddComponent;
  let fixture: ComponentFixture<AAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
