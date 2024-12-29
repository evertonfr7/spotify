/* eslint-disable @typescript-eslint/ban-ts-comment */
import { getTokenFromUrl } from './getTokenFromUrl';

describe('getTokenFromUrl', () => {
  const originalLocation = window.location;

  beforeEach(() => {

    // @ts-expect-error
    delete window.location;
    // @ts-expect-error
    window.location = {
      href: '',
      hash: ''
    };
  });

  afterEach(() => {
    window.location = originalLocation;
  });

  it('should return an object with all parameters from the hash', () => {
    window.location.hash = '#access_token=12345&token_type=bearer';

    const result = getTokenFromUrl();
    expect(result).toEqual({
      access_token: '12345',
      token_type: 'bearer'
    });
  });

  it('should return an empty object if the hash is empty', () => {
    window.location.hash = '';

    const result = getTokenFromUrl();
    expect(result).toEqual({});
  });

  it('should decode URI components in the hash parameters', () => {
    window.location.hash = '#redirect_uri=https%3A%2F%2Fexample.com%2Fcallback';

    const result = getTokenFromUrl();
    expect(result).toEqual({
      redirect_uri: 'https://example.com/callback'
    });
  });

});
