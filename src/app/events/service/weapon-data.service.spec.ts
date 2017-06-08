import { TestBed, inject } from '@angular/core/testing';

import { WeaponDataService } from './weapon-data.service';

describe('WeaponDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeaponDataService]
    });
  });

  it('should be created', inject([WeaponDataService], (service: WeaponDataService) => {
    expect(service).toBeTruthy();
  }));
});
