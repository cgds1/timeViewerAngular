import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilitaryClockComponent } from './military-clock.component';

describe('MilitaryClockComponent', () => {
  let component: MilitaryClockComponent;
  let fixture: ComponentFixture<MilitaryClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MilitaryClockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MilitaryClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
