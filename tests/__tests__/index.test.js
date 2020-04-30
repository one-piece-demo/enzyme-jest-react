const srcComponents = require('../../src/index');

describe('srcComponents index', () => {
  it('exports modules correctly', () => {
    expect(Object.keys(srcComponents)).toMatchSnapshot();
  });
});
