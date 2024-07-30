
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 225215fc-cd85-4c64-8cbc-cf32da5bfcff', () => {
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

    it('should delay 9 ms', async () => {
      await delay(9);
    });

    it('should delay 29 ms', async () => {
      await delay(29);
    });
  })
});
