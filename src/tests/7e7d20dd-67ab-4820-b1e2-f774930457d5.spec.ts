
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 7e7d20dd-67ab-4820-b1e2-f774930457d5', () => {
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

    it('should delay 20 ms', async () => {
      await delay(20);
    });

    it('should delay 42 ms', async () => {
      await delay(42);
    });
  })
});
