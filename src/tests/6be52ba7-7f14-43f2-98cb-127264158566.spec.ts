
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 6be52ba7-7f14-43f2-98cb-127264158566', () => {
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

    it('should delay 43 ms', async () => {
      await delay(43);
    });

    it('should delay 5 ms', async () => {
      await delay(5);
    });
  })
});
