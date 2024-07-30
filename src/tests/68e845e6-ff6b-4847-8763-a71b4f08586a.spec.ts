
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 68e845e6-ff6b-4847-8763-a71b4f08586a', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 33 ms', async () => {
      await delay(33);
    });

    it('should delay 22 ms', async () => {
      await delay(22);
    });

    it('should delay 12 ms', async () => {
      await delay(12);
    });
  })
});
