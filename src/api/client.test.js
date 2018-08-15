import fetchData from './client';

it('should call the api', () => {
    fetch = jest.fn().mockImplementationOnce(() => new Promise(resolve => resolve({"foo": "bar"})));
    return expect(fetchData()).resolves.toEqual({"foo": "bar"});
});


