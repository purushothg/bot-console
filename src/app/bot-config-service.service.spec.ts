import { TestBed } from '@angular/core/testing';

import { BotConfigServiceService } from './bot-config-service.service';

describe('BotConfigServiceService', () => {
  let service: BotConfigServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BotConfigServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
