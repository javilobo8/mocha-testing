
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 38510e38-225a-443d-8008-974e532c5e72', () => {
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

    it('should delay 37 ms', async () => {
      await delay(37);
    });

    it('should delay 46 ms', async () => {
      await delay(46);
    });
  })
});
