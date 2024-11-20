import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiralLoadClockComponent } from './spiral-load-clock.component';

describe('SpiralLoadClockComponent', () => {
  let component: SpiralLoadClockComponent;
  let fixture: ComponentFixture<SpiralLoadClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpiralLoadClockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpiralLoadClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
