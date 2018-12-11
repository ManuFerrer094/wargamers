import { TestBed } from '@angular/core/testing';

import { RegistrojugadorService } from './registrojugador.service';

describe('RegistrojugadorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistrojugadorService = TestBed.get(RegistrojugadorService);
    expect(service).toBeTruthy();
  });
});
