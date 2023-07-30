import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseraddonComponent } from './useraddon.component';

describe('UseraddonComponent', () => {
  let component: UseraddonComponent;
  let fixture: ComponentFixture<UseraddonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseraddonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseraddonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
