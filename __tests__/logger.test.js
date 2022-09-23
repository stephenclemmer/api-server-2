'use strict';

let logger = require('../src/middleware/logger');

describe('Test Logger Middleware', () => {
  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn();

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });
  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('Properly logs output', () => {
    logger(req, res, next);
    console.log('req', req);
    expect(consoleSpy).toHaveBeenCalledWith(`REQUEST: ${req.method}, ${req.originalUrl}`);
  });
  it('Properly calls next()', () => {
    logger(req, res, next);
    expect(next).toHaveBeenCalledWith();
  });
});
