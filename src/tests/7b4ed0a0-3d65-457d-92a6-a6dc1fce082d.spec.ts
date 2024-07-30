
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 7b4ed0a0-3d65-457d-92a6-a6dc1fce082d', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 36 ms', async () => {
      await delay(36);
    });

    it('should delay 25 ms', async () => {
      await delay(25);
    });

    it('should delay 42 ms', async () => {
      await delay(42);
    });
  })
});
