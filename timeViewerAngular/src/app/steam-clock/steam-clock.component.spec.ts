import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteamClockComponent } from './steam-clock.component';

describe('SteamClockComponent', () => {
  let component: SteamClockComponent;
  let fixture: ComponentFixture<SteamClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SteamClockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SteamClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
