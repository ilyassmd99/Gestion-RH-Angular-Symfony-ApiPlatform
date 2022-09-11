import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ADeleteComponent } from './a-delete.component';

describe('ADeleteComponent', () => {
  let component: ADeleteComponent;
  let fixture: ComponentFixture<ADeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ADeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ADeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
