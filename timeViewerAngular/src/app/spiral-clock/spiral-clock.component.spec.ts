import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiralClockComponent } from './spiral-clock.component';

describe('SpiralClockComponent', () => {
  let component: SpiralClockComponent;
  let fixture: ComponentFixture<SpiralClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpiralClockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpiralClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
