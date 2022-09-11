import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DAddComponent } from './d-add.component';

describe('DAddComponent', () => {
  let component: DAddComponent;
  let fixture: ComponentFixture<DAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
