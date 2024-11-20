import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorCircleClockComponent } from './color-circle-clock.component';

describe('ColorCircleClockComponent', () => {
  let component: ColorCircleClockComponent;
  let fixture: ComponentFixture<ColorCircleClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorCircleClockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorCircleClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
