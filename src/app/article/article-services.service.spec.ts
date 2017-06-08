import { TestBed, inject } from '@angular/core/testing';

import { ArticleServicesService } from './article-services.service';

describe('ArticleServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticleServicesService]
    });
  });

  it('should be created', inject([ArticleServicesService], (service: ArticleServicesService) => {
    expect(service).toBeTruthy();
  }));
});
