import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FreeTextInputComponent } from './free-text-input.component';

describe('FreeTextInputComponent', () => {
  let component: FreeTextInputComponent;
  let fixture: ComponentFixture<FreeTextInputComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [FreeTextInputComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
