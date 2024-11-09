import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourglassClockComponent } from './hourglass-clock.component';

describe('HourglassClockComponent', () => {
  let component: HourglassClockComponent;
  let fixture: ComponentFixture<HourglassClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HourglassClockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HourglassClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
