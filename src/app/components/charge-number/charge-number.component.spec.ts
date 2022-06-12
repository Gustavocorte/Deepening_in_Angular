import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargeNumberComponent } from './charge-number.component';

describe('ChargeNumberComponent', () => {
  let component: ChargeNumberComponent;
  let fixture: ComponentFixture<ChargeNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChargeNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChargeNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
