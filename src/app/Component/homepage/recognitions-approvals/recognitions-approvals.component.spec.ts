import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecognitionsApprovalsComponent } from './recognitions-approvals.component';

describe('RecognitionsApprovalsComponent', () => {
  let component: RecognitionsApprovalsComponent;
  let fixture: ComponentFixture<RecognitionsApprovalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecognitionsApprovalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecognitionsApprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
