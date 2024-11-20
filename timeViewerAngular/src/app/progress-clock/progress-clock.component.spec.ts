import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressClockComponent } from './progress-clock.component';

describe('ProgressClockComponent', () => {
  let component: ProgressClockComponent;
  let fixture: ComponentFixture<ProgressClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressClockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
