import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IstanbulTemplateComponent } from './istanbul-template.component';

describe('IstanbulTemplateComponent', () => {
  let component: IstanbulTemplateComponent;
  let fixture: ComponentFixture<IstanbulTemplateComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [IstanbulTemplateComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(IstanbulTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
