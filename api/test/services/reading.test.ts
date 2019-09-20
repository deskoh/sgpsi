import app from '../../src/app';

describe('\'reading\' service', () => {
  it('registered the service', () => {
    const service = app.service('reading');
    expect(service).toBeTruthy();
  });
});
