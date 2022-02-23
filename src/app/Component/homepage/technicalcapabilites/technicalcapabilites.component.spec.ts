import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalcapabilitesComponent } from './technicalcapabilites.component';

describe('TechnicalcapabilitesComponent', () => {
  let component: TechnicalcapabilitesComponent;
  let fixture: ComponentFixture<TechnicalcapabilitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicalcapabilitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalcapabilitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
