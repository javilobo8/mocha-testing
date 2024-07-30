
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 8a9ea74b-87c4-47b6-8bba-3ced70ef15e8', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 0 ms', async () => {
      await delay(0);
    });

    it('should delay 24 ms', async () => {
      await delay(24);
    });

    it('should delay 31 ms', async () => {
      await delay(31);
    });
  })
});
