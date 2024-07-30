
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 620de549-8400-4eb6-8470-bf63d8546c1c', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 42 ms', async () => {
      await delay(42);
    });

    it('should delay 31 ms', async () => {
      await delay(31);
    });

    it('should delay 18 ms', async () => {
      await delay(18);
    });
  })
});
