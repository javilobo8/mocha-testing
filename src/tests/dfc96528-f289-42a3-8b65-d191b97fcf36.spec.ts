
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - dfc96528-f289-42a3-8b65-d191b97fcf36', () => {
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

    it('should delay 5 ms', async () => {
      await delay(5);
    });

    it('should delay 11 ms', async () => {
      await delay(11);
    });
  })
});
