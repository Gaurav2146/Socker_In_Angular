import { TestBed } from '@angular/core/testing';

import { SocketOneService } from './socket-one.service';

describe('SocketOneService', () => {
  let service: SocketOneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocketOneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
