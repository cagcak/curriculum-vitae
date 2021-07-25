import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveResumeComponent } from './live-resume.component';

describe('LiveResumeComponent', () => {
  let component: LiveResumeComponent;
  let fixture: ComponentFixture<LiveResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
