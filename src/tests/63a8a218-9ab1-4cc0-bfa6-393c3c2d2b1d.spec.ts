
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 63a8a218-9ab1-4cc0-bfa6-393c3c2d2b1d', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 20 ms', async () => {
      await delay(20);
    });

    it('should delay 30 ms', async () => {
      await delay(30);
    });

    it('should delay 42 ms', async () => {
      await delay(42);
    });
  })
});
