import { TestBed } from '@angular/core/testing';

import { RegistroequipoService } from '../services/registroequipo.service';

describe('RegistroequipoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistroequipoService = TestBed.get(RegistroequipoService);
    expect(service).toBeTruthy();
  });
});
