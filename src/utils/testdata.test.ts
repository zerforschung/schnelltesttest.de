import { checkCode } from './testdata';

describe('checkCode', () => {
  it('returns a code that is valid', () => {
    const code = checkCode('2116818981498');

    expect(code).toEqual('2116818981498');
  });

  it('returns a code that is valid and has a zero prefix', () => {
    const code = checkCode('02116818981498');

    expect(code).toEqual('2116818981498');
  });

  it('returns a code that is valid and has a missing zero prefix', () => {
    const code = checkCode('106970297533885');

    expect(code).toEqual('0106970297533885');
  });

  it('returns null when no code is found', () => {
    const code = checkCode('this-is-not-a-valid-code');

    expect(code).toEqual(null);
  });
});
