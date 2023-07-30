import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargeaddonComponent } from './rechargeaddon.component';

describe('RechargeaddonComponent', () => {
  let component: RechargeaddonComponent;
  let fixture: ComponentFixture<RechargeaddonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechargeaddonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechargeaddonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
