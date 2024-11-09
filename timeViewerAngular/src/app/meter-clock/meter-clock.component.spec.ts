import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterClockComponent } from './meter-clock.component';

describe('MeterClockComponent', () => {
  let component: MeterClockComponent;
  let fixture: ComponentFixture<MeterClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeterClockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeterClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
