
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 8186a7d4-db12-4fbf-935c-5b898131c88a', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 38 ms', async () => {
      await delay(38);
    });

    it('should delay 4 ms', async () => {
      await delay(4);
    });

    it('should delay 49 ms', async () => {
      await delay(49);
    });
  })
});
