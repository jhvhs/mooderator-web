import fetchData from './client';

it('should call the api', () => {
    fetch = jest.fn(() => new Promise(resolve => resolve('peanut butter')));
    return expect(fetchData()).resolves.toBe('peanut butter');
});