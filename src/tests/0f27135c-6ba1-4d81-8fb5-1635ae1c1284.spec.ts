
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 0f27135c-6ba1-4d81-8fb5-1635ae1c1284', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 31 ms', async () => {
      await delay(31);
    });

    it('should delay 6 ms', async () => {
      await delay(6);
    });

    it('should delay 42 ms', async () => {
      await delay(42);
    });
  })
});
