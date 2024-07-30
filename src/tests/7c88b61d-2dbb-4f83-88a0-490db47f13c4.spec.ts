
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 7c88b61d-2dbb-4f83-88a0-490db47f13c4', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 42 ms', async () => {
      await delay(42);
    });

    it('should delay 31 ms', async () => {
      await delay(31);
    });

    it('should delay 36 ms', async () => {
      await delay(36);
    });
  })
});
