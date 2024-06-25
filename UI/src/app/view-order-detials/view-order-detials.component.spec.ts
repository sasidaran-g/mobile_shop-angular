import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrderDetialsComponent } from './view-order-detials.component';

describe('ViewOrderDetialsComponent', () => {
  let component: ViewOrderDetialsComponent;
  let fixture: ComponentFixture<ViewOrderDetialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOrderDetialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOrderDetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
