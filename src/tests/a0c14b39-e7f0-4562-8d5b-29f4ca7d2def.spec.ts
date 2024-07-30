
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - a0c14b39-e7f0-4562-8d5b-29f4ca7d2def', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 40 ms', async () => {
      await delay(40);
    });

    it('should delay 9 ms', async () => {
      await delay(9);
    });

    it('should delay 0 ms', async () => {
      await delay(0);
    });
  })
});
