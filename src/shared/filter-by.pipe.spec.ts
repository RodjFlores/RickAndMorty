import { FilterObject } from '../models/FilterObject';
import { FilterByPipe } from './filter-by.pipe';

describe('FilterByPipe', () => {
  const testValue = [
    {
      id: 0,
      type: 'abc',
      origin: { name: 'abc' },
      location: { name: 'abc' },
      name: 'abc',
      species: 'abc',
      status: 'abc',
      gender: 'abc',
      image: 'abc',
      episode: ['abc'],
    },
    {
      id: 1,
      type: 'xyz',
      origin: { name: 'xyz' },
      location: { name: 'xyz' },
      name: 'xyz',
      species: 'xyz',
      status: 'xyz',
      gender: 'xyz',
      image: 'xyz',
      episode: ['xyz'],
    },
    {
      id: 2,
      type: 'sss',
      origin: { name: 'sss' },
      location: { name: 'sss' },
      name: 'sss',
      species: 'sss',
      status: 'sss',
      gender: 'sss',
      image: 'sss',
      episode: ['sss'],
    },
  ];
  it('create an instance', () => {
    const pipe = new FilterByPipe();
    expect(pipe).toBeTruthy();
  });

  it('filterBy name properly', () => {
    const pipe = new FilterByPipe();
    const filter: FilterObject = {
      name: 'b',
      species: null,
      status: null,
    };
    expect(pipe.transform(testValue, filter)).toEqual([testValue[0]]);
  });

  it('filterBy species properly', () => {
    const pipe = new FilterByPipe();
    const filter: FilterObject = {
      name: null,
      species: 'xyz',
      status: null,
    };
    expect(pipe.transform(testValue, filter)).toEqual([testValue[1]]);
  });

  it('filterBy status properly', () => {
    const pipe = new FilterByPipe();
    const filter: FilterObject = {
      name: 'b',
      species: null,
      status: 'b',
    };
    expect(pipe.transform(testValue, filter)).toEqual([testValue[0]]);
  });
});
