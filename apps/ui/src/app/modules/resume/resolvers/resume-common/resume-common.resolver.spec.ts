import { inject, TestBed } from '@angular/core/testing';
import { ResumeCommonResolver } from './resume-common.resolver';

describe('Service: Resume', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResumeCommonResolver],
    });
  });

  it('should ...', inject([ResumeCommonResolver], (service: ResumeCommonResolver) => {
    expect(service).toBeTruthy();
  }));
});
