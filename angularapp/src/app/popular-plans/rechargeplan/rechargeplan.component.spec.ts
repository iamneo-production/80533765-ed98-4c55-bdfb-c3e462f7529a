import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargeplanComponent } from './rechargeplan.component';

describe('RechargeplanComponent', () => {
  let component: RechargeplanComponent;
  let fixture: ComponentFixture<RechargeplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechargeplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechargeplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
