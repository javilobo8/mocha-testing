
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 8222312c-167d-4c1c-b03d-a6c3b1e754c8', () => {
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

    it('should delay 42 ms', async () => {
      await delay(42);
    });

    it('should delay 10 ms', async () => {
      await delay(10);
    });
  })
});
