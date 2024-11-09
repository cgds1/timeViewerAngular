import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SundialClockComponent } from './sundial-clock.component';

describe('SundialClockComponent', () => {
  let component: SundialClockComponent;
  let fixture: ComponentFixture<SundialClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SundialClockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SundialClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
