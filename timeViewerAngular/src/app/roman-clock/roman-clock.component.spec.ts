import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomanClockComponent } from './roman-clock.component';

describe('RomanClockComponent', () => {
  let component: RomanClockComponent;
  let fixture: ComponentFixture<RomanClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RomanClockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RomanClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
