import { TestBed } from '@angular/core/testing';

import { VipRequestService } from './vip-request.service';

describe('VipRequestService', () => {
  let service: VipRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VipRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
