import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { EmploymentHistoryComponent } from './employment-history.component';

describe('EmploymentHistoryComponent', () => {
  let component: EmploymentHistoryComponent;
  let fixture: ComponentFixture<EmploymentHistoryComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [EmploymentHistoryComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploymentHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
