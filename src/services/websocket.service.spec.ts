import { TestBed } from '@angular/core/testing';

import { WebsocketService } from './websocket.service';

describe('WebsocketService', () => {
  let service: WebsocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebsocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get a response from websocket', (done:DoneFn) => {
    service.webSocket$.subscribe((res) => {
      expect(res).toEqual({test:'test'});
      done();
    });

    service.sendmessage({test:'test'})
  });
});
