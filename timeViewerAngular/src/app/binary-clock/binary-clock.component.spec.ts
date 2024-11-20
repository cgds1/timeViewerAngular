import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinaryClockComponent } from './binary-clock.component';

describe('BinaryClockComponent', () => {
  let component: BinaryClockComponent;
  let fixture: ComponentFixture<BinaryClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BinaryClockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BinaryClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
