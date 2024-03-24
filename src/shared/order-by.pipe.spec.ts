import { SortDirection, SortTerm } from '../enums/SortAndFilter.enum';
import { OrderByPipe } from './order-by.pipe';

describe('OrderByPipe', () => {
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
    const pipe = new OrderByPipe();
    expect(pipe).toBeTruthy();
  });

  it('orderBy name properly', () => {
    const pipe = new OrderByPipe();
    const testCopy = [...testValue];
    expect(
      pipe.transform(testValue, SortDirection.DESC, SortTerm.NAME),
    ).toEqual([testCopy[1], testCopy[2], testCopy[0]]);
  });
});
