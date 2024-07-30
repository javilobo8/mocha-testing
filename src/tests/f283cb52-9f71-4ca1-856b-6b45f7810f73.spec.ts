
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - f283cb52-9f71-4ca1-856b-6b45f7810f73', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 24 ms', async () => {
      await delay(24);
    });

    it('should delay 46 ms', async () => {
      await delay(46);
    });

    it('should delay 44 ms', async () => {
      await delay(44);
    });
  })
});
