import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SectionPartialComponent } from './section-partial.component';

describe('SectionPartialComponent', () => {
  let component: SectionPartialComponent;
  let fixture: ComponentFixture<SectionPartialComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SectionPartialComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionPartialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
