import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverTableComponent } from './deliver-table.component';

describe('DeliverTableComponent', () => {
  let component: DeliverTableComponent;
  let fixture: ComponentFixture<DeliverTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliverTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
