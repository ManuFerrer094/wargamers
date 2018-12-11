import { TestBed } from '@angular/core/testing';

import { PublicalistaService } from './publicalista.service';

describe('PublicalistaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PublicalistaService = TestBed.get(PublicalistaService);
    expect(service).toBeTruthy();
  });
});
