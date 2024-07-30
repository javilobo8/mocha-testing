
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 7de0dab6-fdc8-4545-b1b0-cdef4e314bda', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 8 ms', async () => {
      await delay(8);
    });

    it('should delay 25 ms', async () => {
      await delay(25);
    });

    it('should delay 47 ms', async () => {
      await delay(47);
    });
  })
});
