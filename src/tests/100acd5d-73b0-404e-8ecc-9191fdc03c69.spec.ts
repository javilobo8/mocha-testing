
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 100acd5d-73b0-404e-8ecc-9191fdc03c69', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 10 ms', async () => {
      await delay(10);
    });

    it('should delay 31 ms', async () => {
      await delay(31);
    });

    it('should delay 32 ms', async () => {
      await delay(32);
    });
  })
});
