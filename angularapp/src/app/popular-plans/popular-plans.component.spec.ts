import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularPlansComponent } from './popular-plans.component';

describe('PopularPlansComponent', () => {
  let component: PopularPlansComponent;
  let fixture: ComponentFixture<PopularPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularPlansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
