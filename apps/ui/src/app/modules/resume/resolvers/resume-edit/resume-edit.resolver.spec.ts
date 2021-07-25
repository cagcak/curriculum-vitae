import { inject, TestBed } from '@angular/core/testing';
import { ResumeEditResolver } from './resume-edit.resolver';

describe('Service: Resume', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResumeEditResolver],
    });
  });

  it('should ...', inject([ResumeEditResolver], (service: ResumeEditResolver) => {
    expect(service).toBeTruthy();
  }));
});
