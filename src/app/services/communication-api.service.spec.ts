import { TestBed } from '@angular/core/testing';

import { CommunicationAPIService } from './communication-api.service';

describe('CommunicationAPIService', () => {
  let service: CommunicationAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunicationAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
