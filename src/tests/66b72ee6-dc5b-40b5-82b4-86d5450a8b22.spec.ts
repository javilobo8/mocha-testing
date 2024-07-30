
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 66b72ee6-dc5b-40b5-82b4-86d5450a8b22', () => {
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

    it('should delay 32 ms', async () => {
      await delay(32);
    });

    it('should delay 0 ms', async () => {
      await delay(0);
    });
  })
});
