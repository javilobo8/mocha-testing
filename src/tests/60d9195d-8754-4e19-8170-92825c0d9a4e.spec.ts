
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 60d9195d-8754-4e19-8170-92825c0d9a4e', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 48 ms', async () => {
      await delay(48);
    });

    it('should delay 30 ms', async () => {
      await delay(30);
    });

    it('should delay 42 ms', async () => {
      await delay(42);
    });
  })
});
