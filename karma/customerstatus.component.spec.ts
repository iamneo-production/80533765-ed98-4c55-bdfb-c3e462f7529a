import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CustomerstatusComponent } from './customerstatus.component';

describe('CustomerstatusComponent', () => {
  let component: CustomerstatusComponent;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [CustomerstatusComponent]
  }));
  beforeEach(() => {
    const fixture = TestBed.createComponent(CustomerstatusComponent);
    component = fixture.componentInstance;
  });
  it('FE_customerStatusTest', () => {
    expect(component).toBeTruthy();
  });
});