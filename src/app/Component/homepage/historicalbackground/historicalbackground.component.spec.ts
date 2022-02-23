import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalbackgroundComponent } from './historicalbackground.component';

describe('HistoricalbackgroundComponent', () => {
  let component: HistoricalbackgroundComponent;
  let fixture: ComponentFixture<HistoricalbackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricalbackgroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricalbackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
