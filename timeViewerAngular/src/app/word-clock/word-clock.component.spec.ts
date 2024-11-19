import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordClockComponent } from './word-clock.component';

describe('WordClockComponent', () => {
  let component: WordClockComponent;
  let fixture: ComponentFixture<WordClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordClockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
