import { TestBed } from '@angular/core/testing';

import { RickAndMortyApiService } from './rickandmortyapi.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

describe('RickAndMortyApiService', () => {
  let service: RickAndMortyApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterModule.forRoot([]),]
    });
    service = TestBed.inject(RickAndMortyApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get a characters response', (done:DoneFn) => {
    service.getCharacters().subscribe((value) => {
      expect(value.hasMorePages).toBeTruthy();
      expect(value.items[0].name).toBe('Rick Sanchez');
      done();
    });
  });

  it('should get a single episode response', (done:DoneFn) => {
    service.getEpisode('1').subscribe((value) => {
      expect(value.name).toBe('Pilot');
      done();
    });
  });
});
