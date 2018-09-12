import { TestBed, inject } from '@angular/core/testing';

import { AnnotateService } from './annotate.service';

describe('AnnotateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnnotateService]
    });
  });

  it('should be created', inject([AnnotateService], (service: AnnotateService) => {
    expect(service).toBeTruthy();
  }));
});
