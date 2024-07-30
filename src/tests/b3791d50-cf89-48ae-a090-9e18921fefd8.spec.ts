
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - b3791d50-cf89-48ae-a090-9e18921fefd8', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 12 ms', async () => {
      await delay(12);
    });

    it('should delay 46 ms', async () => {
      await delay(46);
    });

    it('should delay 9 ms', async () => {
      await delay(9);
    });
  })
});
