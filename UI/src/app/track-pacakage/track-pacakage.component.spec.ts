import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackPacakageComponent } from './track-pacakage.component';

describe('TrackPacakageComponent', () => {
  let component: TrackPacakageComponent;
  let fixture: ComponentFixture<TrackPacakageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackPacakageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackPacakageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
