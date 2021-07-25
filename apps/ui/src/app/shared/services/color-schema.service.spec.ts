import { TestBed } from '@angular/core/testing';
import { ColorSchemeService } from './color-schema.service';

describe('ColorSchemaService', () => {
  let service: ColorSchemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorSchemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
