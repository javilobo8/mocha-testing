
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 5dc1b8ee-20e2-452a-bfc8-28331fe02e69', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 14 ms', async () => {
      await delay(14);
    });

    it('should delay 43 ms', async () => {
      await delay(43);
    });

    it('should delay 3 ms', async () => {
      await delay(3);
    });
  })
});
