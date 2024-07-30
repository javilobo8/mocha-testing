
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 37e4a0ac-e058-4304-9e20-1fb6b85d31c2', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 44 ms', async () => {
      await delay(44);
    });

    it('should delay 27 ms', async () => {
      await delay(27);
    });

    it('should delay 42 ms', async () => {
      await delay(42);
    });
  })
});
