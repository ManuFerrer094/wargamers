import { TestBed } from '@angular/core/testing';

import { MiguardiaService } from './miguardia.service';

describe('MiguardiaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MiguardiaService = TestBed.get(MiguardiaService);
    expect(service).toBeTruthy();
  });
});
