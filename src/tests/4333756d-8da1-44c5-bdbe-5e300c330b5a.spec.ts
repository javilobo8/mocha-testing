
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 4333756d-8da1-44c5-bdbe-5e300c330b5a', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 50 ms', async () => {
      await delay(50);
    });

    it('should delay 25 ms', async () => {
      await delay(25);
    });

    it('should delay 0 ms', async () => {
      await delay(0);
    });
  })
});
