
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - fea2e866-5406-42e0-b900-98fe487f44ae', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 28 ms', async () => {
      await delay(28);
    });

    it('should delay 31 ms', async () => {
      await delay(31);
    });

    it('should delay 0 ms', async () => {
      await delay(0);
    });
  })
});
