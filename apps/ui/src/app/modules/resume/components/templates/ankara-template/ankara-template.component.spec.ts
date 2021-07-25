import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AnkaraTemplateComponent } from './ankara-template.component';

describe('AnkaraTemplateComponent', () => {
  let component: AnkaraTemplateComponent;
  let fixture: ComponentFixture<AnkaraTemplateComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AnkaraTemplateComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AnkaraTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
