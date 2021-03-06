import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ProfessionalSummaryComponent } from './professional-summary.component';

describe('ProfessionalSummaryComponent', () => {
  let component: ProfessionalSummaryComponent;
  let fixture: ComponentFixture<ProfessionalSummaryComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ProfessionalSummaryComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
