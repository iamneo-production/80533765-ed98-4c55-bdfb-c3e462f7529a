import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAddonComponent } from './show-addon.component';

describe('ShowAddonComponent', () => {
  let component: ShowAddonComponent;
  let fixture: ComponentFixture<ShowAddonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAddonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAddonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
