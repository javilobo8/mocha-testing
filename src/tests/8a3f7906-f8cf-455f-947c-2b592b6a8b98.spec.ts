
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 8a3f7906-f8cf-455f-947c-2b592b6a8b98', () => {
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

    it('should delay 47 ms', async () => {
      await delay(47);
    });

    it('should delay 1 ms', async () => {
      await delay(1);
    });
  })
});
