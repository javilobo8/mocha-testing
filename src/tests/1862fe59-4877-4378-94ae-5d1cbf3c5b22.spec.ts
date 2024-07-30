
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 1862fe59-4877-4378-94ae-5d1cbf3c5b22', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 19 ms', async () => {
      await delay(19);
    });

    it('should delay 20 ms', async () => {
      await delay(20);
    });

    it('should delay 36 ms', async () => {
      await delay(36);
    });
  })
});
