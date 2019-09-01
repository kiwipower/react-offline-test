import axios from './axios';

describe('axios', () => {
  it('should set default headers', () => {
    const header = { 'Content-Type': 'application/json' };

    expect(axios.defaults.headers).toMatchObject(header);
  });
});
