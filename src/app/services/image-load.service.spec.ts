import { TestBed, inject } from '@angular/core/testing';

import { ImageLoadService } from './image-load.service';

describe('ImageLoadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageLoadService]
    });
  });

  it('should be created', inject([ImageLoadService], (service: ImageLoadService) => {
    expect(service).toBeTruthy();
  }));
});
