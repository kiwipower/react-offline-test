import debug from 'debug';
import log from '../logger';

jest.mock('debug');

describe('Function and Unit tests for logger function', () => {
  it('Given the namespace When logging Then namespace should be shown', () => {
    // eslint-disable-next-line no-unused-vars
    debug.mockImplementation(namespace => data => namespace);

    const test1 = log();
    const test2 = log('NS-1', 10);
    const test3 = log(10);

    expect(test1).toBeNull();
    expect(test2).toBe('NS-1');
    expect(test3).toBe('KiwiPower');
  });
  it('Given the data When logging Then data should be shown', () => {
    // eslint-disable-next-line no-unused-vars
    debug.mockImplementation(namespace => data => data);

    const test1 = log();
    const test2 = log('NS-1', 10);
    const test3 = log(20);

    expect(test1).toBeNull();
    expect(test2).toBe(10);
    expect(test3).toBe(20);
  });
});
